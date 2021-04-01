import {gender, Profile} from "@maya259/numerology-engine";

const props = {
    birthDate: new Date('1980-9-16'),
    familyName: 'לבקוביץ',
    fatherName: 'יעקב',
    fatherNameAtBirthOfPatient: '',
    firstName: 'אבי',
    firstNameAtBirth: '',
    gender: gender.MALE,
    motherName: 'טובה',
    motherNameAtBirthOfPatient: '',
    birthHour: false,
};

export const profile = new Profile(props);