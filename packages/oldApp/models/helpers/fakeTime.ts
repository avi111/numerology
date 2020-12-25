class FakeTime {

    get result(): any {
        return this._result;
    }

    private readonly _result: any;
    // @ts-ignore
    constructor(func: (...args: any[]) => any, args: any[], date: string = '2019-12-22T10:20:30Z') {
        const RealDate = Date;
        // @ts-ignore
        global.Date.now = jest.fn(() => new Date(date).getTime());
        try {
            // @ts-ignore
            this._result = new func(...args);
        } catch (e) {
            this._result = func(...args);
        }
        // @ts-ignore
        global.Date = RealDate;
    }
}

export default FakeTime;
