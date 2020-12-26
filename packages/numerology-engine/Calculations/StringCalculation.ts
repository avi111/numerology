import Gematria from "../helpers/Gematria/Gematria";

class StringCalculation {

    private _result: number;

    get result(): number {
        return this._result;
    }

    private _isKarmatic: number;
    private name: string;
    private gematria: Gematria;

    get isKarmatic(): number {
        return this._isKarmatic;
    }

    private _isMaster: number;

    get isMaster(): number {
        return this._isMaster;
    }

    constructor(name: string) {
        this.name = name;
        this.gematria = new Gematria(name);
        this._result = this.gematria.small;
        this._isKarmatic = this.gematria.isKarmatic;
        this._isMaster = this.gematria.isMaster;
    }
}

export default StringCalculation;
