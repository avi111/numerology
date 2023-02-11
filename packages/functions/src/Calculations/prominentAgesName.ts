class ProminentAgesName {

    constructor(periods: Array<number[] | undefined>) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this._prominent1 = periods.flat();
        this._prominent1.pop();
        this._prominent1.unshift(0);
        this._prominent2 = this.calculateProminent();
    }

    private _prominent1: number[];

    get prominent1(): number[] {
        return this._prominent1;
    }

    private _prominent2: number[];

    get prominent2(): number[] {
        return this._prominent2;
    }

    public calculateProminent(): number[] {
        const {_prominent1} = this;
        return _prominent1.map((num, index) => {
            if (index < _prominent1.length - 1) {
                return (_prominent1[index] + _prominent1[index + 1]) / 2;
            } else {
                return 0;
            }
        }).filter((num) => !!num);
    }
}

export default ProminentAgesName;
