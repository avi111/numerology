import {Gender} from '@/interfaces/props';

interface ProfileInput {
    'first name': string;
    'first name at birth': string;
    'family name': string;
    'gender': Gender;
    'mother name': string;
    'mother name at birth of patient': string;
    'father name': string;
    'father name at birth of patient': string;
    'birth date': Date;
    'birth hour': boolean;
}

class IProfile implements ProfileInput {
    public 'birth date': Date;
    public 'birth hour': boolean;
    public 'family name': string;
    public 'father name': string;
    public 'father name at birth of patient': string;
    public 'first name': string;
    public 'first name at birth': string;
    public 'mother name': string;
    public 'mother name at birth of patient': string;
    public gender: Gender;

    constructor() {
        this['birth date'] = new Date(Date.now());
        this['birth hour'] = false;
        this['family name'] = '';
        this['father name'] = '';
        this['father name at birth of patient'] = '';
        this['first name'] = '';
        this['first name at birth'] = '';
        this.gender = Gender.MALE;
        this['mother name'] = '';
        this['mother name at birth of patient'] = '';
    }
}

export default IProfile;
export {ProfileInput};
