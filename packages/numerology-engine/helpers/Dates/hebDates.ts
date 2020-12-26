import axios from "axios";
import ContraGematria from "../Gematria/ContraGematria";
import {enMonths, mapHebMonths, months} from "../../consts/letters";
import {HebcalResponse, Item, Parashah, ParashahResponse, Portion} from "../../interfaces/parashah";
import parashot from "../../consts/parashot";

const api = 'https://www.hebcal.com/converter/?cfg=json&gy=YYYY&gm=MM&gd=DD&g2h=1&gs=on';
const parashaApi = 'https://www.hebcal.com/hebcal/?v=1&cfg=json&maj=on&min=on&mod=on&nx=on&year=YYYY&month=MM&ss=on&mf=on&c=on&m=50&s=on';


class HebDates {
    get year(): number {
        return this._year;
    }

    get month(): number {
        return this._month;
    }

    get day(): number {
        return this._day;
    }

    get hebYear(): number {
        return this._hebYear;
    }

    get hebMonth(): number {
        return this._hebMonth;
    }

    get hebDay(): number {
        return this._hebDay;
    }

    public _geoid: number;
    public _hour: string;
    private date: Date;
    private readonly _year: number;
    private readonly _month: number;
    private readonly _day: number;

    private _hebYear = 0;

    private _hebMonth = 0;

    private _hebDay = 0;

    constructor(date: Date, geoid = 0) {
        this.date = date;
        this._year = date.getFullYear();
        this._month = date.getMonth() + 1;
        this._day = date.getDate() - 1;
        this._hour = `${date.getHours()}:${date.getMinutes()}`;
        this._geoid = geoid;
    }

    public static getHebMonthName(month: number): string | undefined {
        if (month > 0 || month < 13) {
            return months[month - 1];
        }
    }

    public static getHebDayName(day: number): string | void {
        return new ContraGematria(day).gematria;
    }

    public static getHebYearName(year: number): string | void {
        return new ContraGematria(year).gematria;
    }

    public static getHebMonthByEn(month: string): string | void {
        const index = enMonths.findIndex((m) => m === month);
        if (index !== -1) {
            return months[index];
        }
    }

    public static splitParashah(str: string | undefined): Portion | undefined {
        if (str) {
            const regex = /\b(\w+)\b ([\d:]+(-\d+)?)(([ -]+)([\d:]+(-\d+)?))?/g;

            let m;
            let matches: string[] = [];

            while ((m = regex.exec(str)) !== null) {
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }

                m.forEach((match) => {
                    matches.push(match);
                });
            }

            matches = matches.filter((m) => m);
            const begin = matches[2].split(':');
            const end = (matches.length > 6 && matches[6].split(':')) || [''];
            return {
                book: matches[1],
                begin: {
                    chapter: begin[0],
                    pasuk: (begin.length > 1 && begin[1]) || '',
                },
                end: {
                    chapter: end[0],
                    pasuk: (end.length > 1 && end[1]) || '',
                },
            };
        }
    }

    private static getRef(item: Item | undefined): string | undefined {
        if (item) {
            const regex = item.link.match(/([^/]+$)/g);
            const parashah = regex && regex[0];
            const ref = item.leyning && item.leyning.torah;
            if (!ref && parashah) {
                return parashot[parashah];
            }

            return ref;
        }
    }

    public async getDate() {
        const url = api.replace('YYYY', this._year + '')
            .replace('MM', this._month + '')
            .replace('DD', this._day + '');
        try {
            const response = await axios.get(url);
            const data: HebcalResponse = response.data;
            const hebYear = this._hebYear = data.hy;
            const hebMonth = this._hebMonth = data.hm && mapHebMonths.get(data.hm.replace(/'/g, ''));
            const hebDay = this._hebDay = data.hd;

            const HebDates = data.hebrew;

            return {
                hebDay,
                hebMonth,
                hebYear,
                HebDates,
            };
        } catch (e) {
            return {};
        }
    }

    public async getParashah(): Promise<Parashah> {
        const {year, month, day} = this;
        const dates: Item[] = await this.getShabbatot(year, month);
        const chosen = dates && dates.filter((d) => d.leyning && d.leyning.torah).map((d) => new Date(d.date).getDate()).findIndex((d) => d > day);
        const item: Item | undefined = chosen > -1 ? dates[chosen] : (await this.getShabbatot(year, month + 1)).shift();
        const ref: string | undefined = HebDates.getRef(item);

        return {
            parashah: item && item.title.replace('Parashat ', ''),
            hebrew: item && item.hebrew.replace('פרשת ', ''),
            ref: HebDates.splitParashah(ref),
        };
    }

    private async getShabbatot(year: number, month: number): Promise<Item[]> {
        const parashaUrl = parashaApi.replace('YYYY', year + '')
            .replace('MM', month + '');
        try {
            const parashaResponse = await axios.get(parashaUrl);
            const dataParashah: ParashahResponse = parashaResponse.data;
            return (
                dataParashah.items
                && dataParashah.items.filter((item) => new Date(item.date).getDay() === 6)
            ) || [];
        } catch (e) {
            return [];
        }
    }
}

export default HebDates;