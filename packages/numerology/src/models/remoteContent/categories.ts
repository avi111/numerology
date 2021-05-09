import {dictionaryKeys} from "../../consts/dictionary";

enum categories {
    birthYear = "birthYear",
    destiny="destiny",
    birthDay="birthDay",
    lettersContents="lettersContents",
    firstNameNumber="firstNameNumber",
    fullNameNumber="fullNameNumber",
    consonants="consonants",
    ehevi="ehevi",
    matchNameBirthDate="matchNameBirthDate",
    rows="rows",
    isFirstNameAHilltop="isFirstNameAHilltop"
}

export enum sets {
    numbers="numbers",
    letters="letters"
}

export interface ICategoryItem {
    key: categories,
    name: dictionaryKeys,
    set: sets
}

export const categoryItems: {[key: string]: ICategoryItem} = {
    birthYear: {
        key: categories.birthYear,
        name: dictionaryKeys["birth year"],
        set: sets.numbers
    },
    destiny: {
        key: categories.destiny,
        name: dictionaryKeys["destiny"],
        set: sets.numbers
    },
    birthDay: {
        key: categories.birthDay,
        name: dictionaryKeys["birth day"],
        set: sets.numbers
    },
    lettersContents: {
        key: categories.lettersContents,
        name: dictionaryKeys["name letters"],
        set: sets.letters
    },
    firstNameNumber: {
        key: categories.firstNameNumber,
        name: dictionaryKeys["first name number"],
        set: sets.numbers
    },
    fullNameNumber: {
        key: categories.fullNameNumber,
        name: dictionaryKeys["full name number"],
        set: sets.numbers
    },
    consonants: {
        key: categories.consonants,
        name: dictionaryKeys["consonants"],
        set: sets.letters
    },
    ehevi: {
        key: categories.ehevi,
        name: dictionaryKeys.ehevi,
        set: sets.letters
    },
    isFirstNameAHilltop: {
        key: categories.isFirstNameAHilltop,
        name: dictionaryKeys["is first name on a hilltop"],
        set: sets.numbers
    },
    rows: {
        key: categories.rows,
        name: dictionaryKeys["number of rows in the matrix"],
        set: sets.numbers
    }
}
export default categories;