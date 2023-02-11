import Props from "../interfaces/props";
import MainTriangle from "../Calculations/mainTriangle";
import Name from "../Calculations/name";
import Dragon from "../Calculations/dragon";
import MatchNameBirth from "../Calculations/matchNameBirth";
import MissingNumbers from "../Calculations/missingNumbers";
import PersonalYear from "../Calculations/personalYear";
import Hilltops from "../Calculations/hilltops";
import Quarters from "../Calculations/quarters";
import MagicSquare from "../Calculations/magicSquare";
import Kabbalah from "../Calculations/kabbalah";
import LifeRoute from "../Calculations/lifeRoute";
import GayOrientation from "../Calculations/GayOrientation";
import {Parashah} from "../interfaces/parashah";
import NameMapClass from "./NameMapClass";
import HebDates from "../helpers/Dates/hebDates";

export interface ProfileProps {
    props: Props;
    _triangle: MainTriangle;
    _dragon: Dragon;
    _name: Name;
    _matchNameBirth: MatchNameBirth;
    _missingNumbers: MissingNumbers;
    _personalYear: PersonalYear;
    _hilltops: Hilltops;
    _quarters: Quarters[];
    _magicSquareName: MagicSquare;
    _magicSquareBirthDate: MagicSquare;
    _kabbalah: Kabbalah;
    _lifeRoute: LifeRoute;
    _gayOrientation: GayOrientation;
}

class Profile implements ProfileProps {

    public birthDate: Date;
    public hebDate: string | undefined;
    public _gayOrientation: GayOrientation;
    public props: Props;
    public firstName: string;
    public familyName: string;
    public _parashah: Parashah | undefined;
    public letters: string[];

    constructor(props: Props) {
        this.props = props;
        const {
            familyName,
            birthDate,
            firstName,
            firstNameAtBirth,
            fatherName,
            motherName,
            fatherNameAtBirthOfPatient,
            motherNameAtBirthOfPatient,
            gender,
        }: Props = this.props;

        this.birthDate = birthDate;
        this.firstName = firstName;
        this.familyName = familyName;

        this.letters = NameMapClass.getLetters(firstName, familyName);

        this._triangle = new MainTriangle(
            birthDate,
            firstName,
            familyName,
        );

        this._dragon = new Dragon(
            firstNameAtBirth || firstName,
            fatherNameAtBirthOfPatient || fatherName,
            motherNameAtBirthOfPatient || motherName,
            gender,
        );

        this._name = new Name(familyName, firstName);
        this._matchNameBirth = new MatchNameBirth(this._triangle);
        this._missingNumbers = new MissingNumbers(firstName, familyName);
        this._personalYear = new PersonalYear(birthDate, this._triangle);
        this._hilltops = new Hilltops(this._triangle);
        this._quarters = [
            new Quarters(this._triangle, birthDate, -1),
            new Quarters(this._triangle, birthDate, 0),
            new Quarters(this._triangle, birthDate, 1),
            new Quarters(this._triangle, birthDate, 2),
            new Quarters(this._triangle, birthDate, 3),
        ];
        this._magicSquareName = new MagicSquare(firstName + familyName);
        this._magicSquareBirthDate = new MagicSquare(birthDate);
        this._kabbalah = new Kabbalah(firstName, motherNameAtBirthOfPatient || motherName);

        this._lifeRoute = new LifeRoute(`${firstName}${familyName}`);
        this._gayOrientation = GayOrientation.getGayOrientation(
            this.triangle,
            this.hilltops,
            this.magicSquareBirthDate);
    }

    public _hilltopsHeb: Hilltops | undefined;

    get hilltopsHeb(): Hilltops {
        return this._hilltopsHeb as Hilltops;
    }

    public _matchNameBirthHeb: MatchNameBirth | undefined;

    get matchNameBirthHeb(): MatchNameBirth | undefined {
        return this._matchNameBirthHeb;
    }

    public _triangleHeb: MainTriangle | undefined;

    get triangleHeb(): MainTriangle | undefined {
        return this._triangleHeb;
    }

    public _dragon: Dragon;

    get dragon(): Dragon {
        return this._dragon;
    }

    public _hilltops: Hilltops;

    get hilltops(): Hilltops {
        return this._hilltops;
    }

    public _kabbalah: Kabbalah;

    get kabbalah(): Kabbalah {
        return this._kabbalah;
    }

    public _magicSquareBirthDate: MagicSquare;

    get magicSquareBirthDate(): MagicSquare {
        return this._magicSquareBirthDate;
    }

    public _magicSquareName: MagicSquare;

    get magicSquareName(): MagicSquare {
        return this._magicSquareName;
    }

    public _matchNameBirth: MatchNameBirth;

    get matchNameBirth(): MatchNameBirth {
        return this._matchNameBirth;
    }

    public _missingNumbers: MissingNumbers;

    get missingNumbers(): MissingNumbers {
        return this._missingNumbers;
    }

    public _name: Name;

    get name(): Name {
        return this._name;
    }

    public _personalYear: PersonalYear;

    get personalYear(): PersonalYear {
        return this._personalYear;
    }

    public _quarters: Quarters[];

    get quarters(): Quarters[] {
        return this._quarters;
    }

    public _triangle: MainTriangle;

    get triangle(): MainTriangle {
        return this._triangle;
    }

    public _personalYearHeb: PersonalYear | undefined;

    get personalYearHeb(): PersonalYear | undefined {
        return this._personalYearHeb;
    }

    public _magicSquareBirthDateHeb: MagicSquare | undefined;

    get magicSquareBirthDateHeb(): MagicSquare | undefined {
        return this._magicSquareBirthDateHeb;
    }

    public _lifeRoute: LifeRoute;

    get lifeRoute(): LifeRoute {
        return this._lifeRoute;
    }

    public static getProfile(props: Props): Promise<Profile> {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve) => {
            const profile = new Profile(props);
            await profile.calculateAsync();
            resolve(profile);
        });
    }

    public async calculateAsync() {
        const {birthDate, firstName, familyName} = this;
        const hebDateObj = new HebDates(birthDate);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const {hebDay, hebMonth, hebYear, hebDate} = await hebDateObj.getDate();
        const hebBirthDate = new Date([hebDay, hebMonth, hebYear].reverse().join('-'));

        this.hebDate = hebDate;

        if (hebDate) {
            this._triangleHeb = new MainTriangle(
                hebBirthDate,
                firstName,
                familyName,
            );
        }

        this._parashah = await hebDateObj.getParashah();

        if (this._triangleHeb) {
            this._hilltopsHeb = new Hilltops(this._triangleHeb);
            this._personalYearHeb = new PersonalYear(birthDate, this._triangleHeb);
            this._matchNameBirthHeb = new MatchNameBirth(this._triangleHeb);
            this._magicSquareBirthDateHeb = new MagicSquare(hebBirthDate);
        }
    }
}

export default Profile;
