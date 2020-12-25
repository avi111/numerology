import {getWord} from '@/mixin';

class Periods {

    get fields(): Array<{ label: string; key: string }> {
        return this._fields;
    }

    get items(): Array<object | undefined> {
        return this._items;
    }
    private firstName: string;
    private periods: Array<string[] | undefined>;

    private _fields: Array<{ label: string; key: string }>;

    private _items: Array<object | undefined>;

    constructor(firstName: string, periods: Array<string[] | undefined>) {
        this.firstName = firstName;
        this.periods = periods;
        this._fields = this.setFields();
        this._items = this.setItems();
    }

    public static array_combine(keys: string[], values: string[]) {
        const newArray = {};
        let i: number;

        // input sanitation
        // Only accept arrays or array-like objects
        // Require arrays to have a count
        if (typeof keys !== 'object') {
            return false;
        }
        if (typeof values !== 'object') {
            return false;
        }


        if (!keys.length) {
            return false;
        }

        // number of elements does not match
        if (keys.length !== values.length) {
            return false;
        }

        for (i = 0; i < keys.length; i++) {
            // @ts-ignore
            newArray[keys[i]] = values[i];
        }

        return newArray;
    }

    public calculate(): Array<object | undefined> {
        const cycles = this.periods;

        return (this.firstName.split('').concat('ages')).map((letter, index) => {
            const columns = Periods.array_combine(
                cycles.map((cycle, i) => 'cycle' + (i + 1)),
                cycles.map((cycle) => (cycle as string[])[index]),
            );
            return {
                letter,
                ...columns,
            };
        });
    }

    public setItems() {
        return this
            .calculate().map((period: any) => {
                if (period && period.letter === 'ages') {
                    period.letter = getWord('ages');
                }
                return period;
            });
    }

    public setFields() {
        return [
            {
                key: 'letter',
                label: getWord('letter'),
            },
        ].concat(
            this.periods.map((period: string[] | undefined, index: number) => {
                return {
                    key: 'cycle' + (index + 1),
                    label: `${getWord('cycle')} ${(index + 1)}`,
                };
            }),
        );
    }
}

export default Periods;
