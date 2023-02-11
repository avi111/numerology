import _uniq from 'lodash/uniq';
import Name from "../Calculations/name";
import MissingNumbers from "../Calculations/missingNumbers";
import LifeRoute from "../Calculations/lifeRoute";
import Letters from "../helpers/Letters/letters";

export interface NameMapProps {
    firstName: string;
    familyName: string;
}

export interface NameMapClassProps {
    props: NameMapProps;
    letters: string[];
    nameNumbers: Name;
    missingNumbers: MissingNumbers;
    lifeRoute: LifeRoute;
}

class NameMapClass implements NameMapClassProps {
    public letters: string[];
    public lifeRoute: LifeRoute;
    public missingNumbers: MissingNumbers;
    public nameNumbers: Name;
    public props: NameMapProps;

    constructor(props: NameMapProps) {
        this.props = props;
        const {familyName, firstName} = props;
        this.nameNumbers = new Name(familyName, firstName);
        const fullName = [firstName, familyName].join('');
        this.letters = NameMapClass.getLetters(firstName, familyName);
        this.lifeRoute = new LifeRoute(fullName);
        this.missingNumbers = new MissingNumbers(firstName, familyName);
    }

    public static getNameMap(props: NameMapProps): Promise<NameMapClass> {
        return new Promise((resolve) => {
            const nameMap = new NameMapClass(props);
            resolve(nameMap);
        });
    }

    public static getLetters(firstName: string, familyName: string): string[] {
        const fullName = [firstName, familyName].join('');
        const match = fullName.match(/[א-ת]+/g);
        const letters = ((match && match.join('').split('')) || []).map((l) => Letters.convert(l));
        return _uniq(letters);
    }
}

export default NameMapClass;
