import Props from "../interfaces/props";
import Gematria from "../helpers/Gematria/Gematria";

class Kabbalah implements Partial<Props> {
    public firstName: string;
    public motherNameAtBirthOfPatient: string;
    private readonly _worlds: number;
    private readonly _star: number;
    private readonly _health: number;
    private readonly _soul: number;


    constructor(firstName: string, motherNameAtBirthOfPatient: string) {
        this.firstName = firstName;
        this.motherNameAtBirthOfPatient = motherNameAtBirthOfPatient;

        const bigGematria = new Gematria(`${this.firstName}${this.motherNameAtBirthOfPatient}`).big;
        this._worlds = (bigGematria % 5) || 5;
        this._star = (bigGematria % 7) || 7;
        this._health = (bigGematria % 9) || 9;
        this._soul = (bigGematria % 12) || 12;
    }


    get worlds(): number {
        return this._worlds;
    }

    get star(): number {
        return this._star;
    }

    get health(): number {
        return this._health;
    }

    get soul(): number {
        return this._soul;
    }
}

export default Kabbalah;
