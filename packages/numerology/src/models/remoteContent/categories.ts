import {dictionaryKeys} from "../../consts/dictionary";

enum categories {
    birthYear = "birthYear",
    destiny="destiny",
    birthDay="birthDay"
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
    }
}
export default categories;