export interface Word {
    'lang': string;
    'value': string;
}

export interface DictionaryItem {
    'translations': Key;
}

export interface Key {
    translations: {
        [index: string]: Word[];
    };
}
