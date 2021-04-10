import {dictionaryKeys} from "../../consts/dictionary";

enum categories {
    birthYear = "birthYear",
    destiny="destiny",
    birthDay="birthDay"
}

export interface ICategoryItem {
    key: categories,
    name: dictionaryKeys
}

export const categoryItems: {[key: string]: ICategoryItem} = {
    birthYear: {
        key: categories.birthYear,
        name: dictionaryKeys["birth year"]
    },
    destiny: {
        key: categories.destiny,
        name: dictionaryKeys["destiny"]
    },
    birthDay: {
        key: categories.birthDay,
        name: dictionaryKeys["birth day"]
    }
}
export default categories;