import {Gender, Profile, Props} from "@maya259/numerology-engine";

const props: Props = {
    birthDate: new Date('1980-9-16'),
    familyName: 'לבקוביץ',
    fatherName: 'יעקב',
    fatherNameAtBirthOfPatient: '',
    firstName: 'אבי',
    firstNameAtBirth: '',
    gender: Gender.MALE,
    motherName: 'טובה',
    motherNameAtBirthOfPatient: '',
    birthHour: false
};

export const profile = new Profile(props);