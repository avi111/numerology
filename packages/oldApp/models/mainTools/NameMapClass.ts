import Name from '@/models/calculations/name';
import LifeRoute from '@/models/calculations/lifeRoute';
import MissingNumbers from '@/models/calculations/missingNumbers';
import Letters from '@/models/helpers/letters';
import _uniq from 'lodash/uniq';

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
        return new Promise(async (resolve) => {
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
