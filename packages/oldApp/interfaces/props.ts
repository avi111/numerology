interface Props {
    firstName: string;
    firstNameAtBirth: string;
    familyName: string;
    gender: Gender;
    motherName: string;
    motherNameAtBirthOfPatient: string;
    fatherName: string;
    fatherNameAtBirthOfPatient: string;
    birthDate: Date;
    birthHour: boolean;
}

enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

export default Props;
export {Gender};
