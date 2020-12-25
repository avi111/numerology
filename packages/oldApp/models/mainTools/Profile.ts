import MainTriangle from '@/models/calculations/mainTriangle';
import Props from '@/interfaces/props';
import Dragon from '@/models/calculations/dragon';
import Name from '@/models/calculations/name';
import MatchNameBirth from '@/models/calculations/matchNameBirth';
import MissingNumbers from '@/models/calculations/missingNumbers';
import PersonalYear from '@/models/calculations/personalYear';
import Hilltops from '@/models/calculations/hilltops';
import Quarters from '@/models/calculations/quarters';
import MagicSquare from '@/models/calculations/magicSquare';
import Kabbalah from '@/models/calculations/kabbalah';
import HebDate, {Parashah} from '@/models/helpers/hebDates';
import LifeRoute from '@/models/calculations/lifeRoute';
import NameMapClass from '@/models/mainTools/NameMapClass';
import GayOrientation from '@/models/calculations/GayOrientation';

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

    get triangle(): MainTriangle {
        return this._triangle;
    }

    get dragon(): Dragon {
        return this._dragon;
    }

    get name(): Name {
        return this._name;
    }

    get matchNameBirth(): MatchNameBirth {
        return this._matchNameBirth;
    }

    get missingNumbers(): MissingNumbers {
        return this._missingNumbers;
    }

    get personalYear(): PersonalYear {
        return this._personalYear;
    }

    get hilltops(): Hilltops {
        return this._hilltops;
    }

    get magicSquareName(): MagicSquare {
        return this._magicSquareName;
    }

    get magicSquareBirthDate(): MagicSquare {
        return this._magicSquareBirthDate;
    }

    get kabbalah(): Kabbalah {
        return this._kabbalah;
    }

    get hilltopsHeb(): Hilltops {
        return this._hilltopsHeb as Hilltops;
    }

    get matchNameBirthHeb(): MatchNameBirth | undefined {
        return this._matchNameBirthHeb;
    }

    get triangleHeb(): MainTriangle | undefined {
        return this._triangleHeb;
    }

    get personalYearHeb(): PersonalYear | undefined {
        return this._personalYearHeb;
    }

    get magicSquareBirthDateHeb(): MagicSquare | undefined {
        return this._magicSquareBirthDateHeb;
    }

    get quarters(): Quarters[] {
        return this._quarters;
    }

    get lifeRoute(): LifeRoute {
        return this._lifeRoute;
    }

    public _hilltopsHeb: Hilltops | undefined;

    public _matchNameBirthHeb: MatchNameBirth | undefined;

    public _triangleHeb: MainTriangle | undefined;

    public birthDate: Date;
    public hebDate: string | undefined;

    public _dragon: Dragon;
    public _hilltops: Hilltops;
    public _kabbalah: Kabbalah;
    public _magicSquareBirthDate: MagicSquare;
    public _magicSquareName: MagicSquare;
    public _matchNameBirth: MatchNameBirth;
    public _missingNumbers: MissingNumbers;
    public _name: Name;
    public _personalYear: PersonalYear;
    public _gayOrientation: GayOrientation;

    public _quarters: Quarters[];
    public _triangle: MainTriangle;
    public props: Props;
    public firstName: string;
    public familyName: string;
    public _parashah: Parashah | undefined;

    public _personalYearHeb: PersonalYear | undefined;

    public _magicSquareBirthDateHeb: MagicSquare | undefined;

    public _lifeRoute: LifeRoute;
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

    public static getProfile(props: Props): Promise<Profile> {
        return new Promise(async (resolve) => {
            const profile = new Profile(props);
            await profile.calculateAsync();
            resolve(profile);
        });
    }

    public async calculateAsync() {
        const {birthDate, firstName, familyName} = this;
        const hebDateObj = new HebDate(birthDate);
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
