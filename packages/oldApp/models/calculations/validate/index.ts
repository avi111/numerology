import {ReportType} from '@/interfaces/reportType';
import {getWord} from '@/mixin';
import IProfile, {ProfileInput} from '@/models/calculations/validate/IProfile';
import {Gender} from '@/interfaces/props';
import ICouple, {CouplesInput} from '@/models/calculations/validate/ICouple';
import IBusiness, {BusinessInput} from '@/models/calculations/validate/IBusiness';

interface Mapper {
    [key: string]: (val: string) => { value: any, valid: boolean };
}

export type CSVRow = ProfileInput | CouplesInput | BusinessInput;
export type CSVProps = CSVRow[];

class Validate {

    get valid(): boolean | undefined {
        return this._valid;
    }

    private _valid: boolean | undefined;

    private readonly type: ReportType;
    private csv: string[][];

    private _props: CSVProps = [];

    get props(): CSVProps {
        return this._props;
    }

    constructor(type: ReportType, csv: string[][]) {
        this.type = type;
        this.csv = csv;
        this.dateMapper = this.dateMapper.bind(this);
        this.dateMapper3rdPartner = this.dateMapper3rdPartner.bind(this);
        this.genderMapper = this.genderMapper.bind(this);
        this.validateType();
    }

    public dateMapper3rdPartner(val: string): { value: Date | undefined, valid: boolean } {
        let valid = true;
        let value: Date | undefined = new Date(val && val.split('/').reverse().join('-'));
        if (isNaN(value.getDate())) {
            valid = false;
        }

        if (!val) {
            valid = true;
            value = undefined;
        }

        return {
            value,
            valid,
        };
    }

    public dateMapper(val: string): { value: Date, valid: boolean } {
        let valid = true;
        const value = new Date(val && val.split('/').reverse().join('-'));
        if (isNaN(value.getDate())) {
            valid = false;
        }
        return {
            value,
            valid,
        };
    }

    public genderMapper(val: string): { value: any, valid: boolean } {
        const genders = Object.keys(Gender).map((gender) => {
            return getWord(gender.toLowerCase()) || gender.toLowerCase();
        });

        let valid = true;
        let value;

        switch (val) {
            case genders[0]:
            case genders[0][0]:
                value = Gender.MALE;
                break;
            case genders[1]:
            case genders[1][0]:
                value = Gender.FEMALE;
                break;
            default:
                valid = false;
        }

        return {
            value,
            valid,
        };
    }

    public validateType() {
        let mapper: Mapper = {};
        let props;
        let template;

        switch (this.type) {
            case ReportType.BUSINESS:
                props = {
                    'business name': '',
                    'business start date': new Date(Date.now()),
                    'birth date1': new Date(Date.now()),
                    'birth date2': new Date(Date.now()),
                    'birth date3': new Date(Date.now()),
                    'family name1': '',
                    'family name2': '',
                    'family name3': '',
                    'first name1': '',
                    'first name2': '',
                    'first name3': '',
                } as BusinessInput;

                mapper = {
                    'birth date1': this.dateMapper,
                    'birth date2': this.dateMapper,
                    'birth date3': this.dateMapper3rdPartner,
                    'business start': this.dateMapper,
                };

                template = new IBusiness();
                break;
            case ReportType.COUPLE:
                props = {
                    'birth date1': new Date(Date.now()),
                    'birth date2': new Date(Date.now()),
                    'family name1': '',
                    'family name2': '',
                    'first name1': '',
                    'first name2': '',
                } as CouplesInput;

                mapper = {
                    'birth date1': this.dateMapper,
                    'birth date2': this.dateMapper,
                };

                template = new ICouple();
                break;
            // case ReportType.NAME:
            //     this._valid = this.validateName();
            //     break;
            case ReportType.PROFILE:
                props = {
                    'father name': '',
                    'family name': '',
                    'birth hour': false,
                    'birth date': new Date(Date.now()),
                    'first name': '',
                    'father name at birth of patient': '',
                    'first name at birth': '',
                    'gender': Gender.MALE,
                    'mother name': '',
                    'mother name at birth of patient': '',
                } as ProfileInput;

                mapper = {
                    'birth date': this.dateMapper,
                    'gender': this.genderMapper,
                };

                template = new IProfile();
                break;
            default:
                break;
        }

        this._valid = this.validateWrapper(props, mapper, template);
    }

    public validateWrapper(props: any, mapper: Mapper, reference: any): boolean {
        const keys: string[] = Object.keys(reference);
        const topics = this.csv[0].filter((row) => row);
        const topicsNoNumbers = topics.map((topic) => topic.replace(/\d/m, ''));
        const topicsEn: string[] = [];
        // noinspection JSMismatchedCollectionQueryUpdate
        const topicsEnNoNumbers: string[] = [];
        const type = this.type;
        const self = this;
        let valid = true;
        const propsArr: CSVProps = [];
        try {
            keys.forEach((key, i) => {
                const translation = getWord(key.replace(/\d/m, '')) || key.replace(/\d/m, '');
                const currentValid = topicsNoNumbers.includes(translation);
                const translatedKey = translation + key.replace(key.replace(/\d/m, ''), '');
                topicsEnNoNumbers[topicsNoNumbers.indexOf(translatedKey)] = key.replace(/\d/m, '');
                topicsEn[topics.indexOf(translatedKey)] = key;
                valid = valid && currentValid;
            });

            valid = valid && (topicsEn.length === topics.length);

            if (valid) {
                this.csv.slice(1).forEach((row, rowIndex) => {
                    if (!row[row.length - 1]) {
                        row = row.slice(0, row.length - 1);
                    }

                    if (type === ReportType.PROFILE) {
                        row[topicsEn.indexOf('mother name at birth of patient')] = row[topicsEn.indexOf('mother name at birth of patient')] || '';
                    }

                    if (type === ReportType.BUSINESS) {
                        row[topicsEn.indexOf('first name3')] = row[topicsEn.indexOf('first name3')] || '';
                        row[topicsEn.indexOf('family name3')] = row[topicsEn.indexOf('family name3')] || '';
                        row[topicsEn.indexOf('birth date3')] = row[topicsEn.indexOf('birth date3')] || '';
                    }

                    valid = valid && row.length === topics.length;
                    topicsEn.forEach((topic, i) => {
                        const index = topicsEn.indexOf(topic);
                        let value;
                        if (mapper[topic]) {
                            const mapperResults = mapper[topic](row[index]);
                            value = mapperResults.value;
                            valid = valid && mapperResults.valid;
                        } else {
                            value = row[index];
                        }

                        // @ts-ignore
                        props[topicsEn[index]] = value;
                    });
                    propsArr.push({...props});
                });
            }

            if (!valid) {
                // noinspection ExceptionCaughtLocallyJS
                throw new Error();
            }
        } catch (e) {
            valid = false;
        }
        this._props = propsArr;
        return valid;
    }
}

export default Validate;
