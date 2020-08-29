import Props, {Gender} from '@/interfaces/props';
import Gimatria from '@/models/helpers/gimatria';

type Name = Partial<Props>;

class Dragon implements Name {

    public firstNameAtBirth: string;
    public fatherNameAtBirthOfPatient: string;
    public motherNameAtBirthOfPatient: string;
    public gender: Gender;
    public tail: number;
    public head: number;


    constructor(firstNameAtBirth: string,
                fatherNameAtBirthOfPatient: string,
                motherNameAtBirthOfPatient: string,
                gender: Gender) {
        this.firstNameAtBirth = firstNameAtBirth;
        this.fatherNameAtBirthOfPatient = fatherNameAtBirthOfPatient;
        this.motherNameAtBirthOfPatient = motherNameAtBirthOfPatient;
        this.gender = gender;
        this.head = Dragon.calculateHead(this);
        this.tail = Dragon.calculateTail(this);
    }

    public static calculateTail(dragon: Dragon): number {
        const dragonTail = (dragon.gender === Gender.FEMALE ?
                [dragon.firstNameAtBirth, dragon.fatherNameAtBirthOfPatient] :
                [dragon.firstNameAtBirth, dragon.motherNameAtBirthOfPatient]
        ).join('');

        return new Gimatria((dragonTail)).small;
    }

    public static calculateHead(dragon: Dragon): number {
        const dragonHead = (dragon.gender === Gender.FEMALE ?
                [dragon.firstNameAtBirth, dragon.motherNameAtBirthOfPatient] :
                [dragon.firstNameAtBirth, dragon.fatherNameAtBirthOfPatient]
        ).join('');

        return new Gimatria((dragonHead)).small;
    }
}

export default Dragon;
