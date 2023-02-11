class FakeTime {

    private readonly _result: any;

    // @ts-ignore
    constructor(func: (...args: any[]) => any, args: any[], date = '2019-12-22T10:20:30Z') {
        const RealDate = Date;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        global.Date.now = jest.fn(() => new Date(date).getTime());
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this._result = new func(...args);
        } catch (e) {
            this._result = func(...args);
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        global.Date = RealDate;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment

    get result(): any {
        return this._result;
    }
}

export default FakeTime;
