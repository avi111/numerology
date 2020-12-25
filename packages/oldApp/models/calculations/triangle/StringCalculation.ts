import Gimatria from '@/models/helpers/gimatria';

class StringCalculation {

    private _result: number;

    get result(): number {
        return this._result;
    }

    private _isKarmatic: number;
    private name: string;
    private gimatria: Gimatria;

    get isKarmatic(): number {
        return this._isKarmatic;
    }

    private _isMaster: number;

    get isMaster(): number {
        return this._isMaster;
    }

    constructor(name: string) {
        this.name = name;
        this.gimatria = new Gimatria(name);
        this._result = this.gimatria.small;
        this._isKarmatic = this.gimatria.isKarmatic;
        this._isMaster = this.gimatria.isMaster;
    }
}

export default StringCalculation;
