export interface Parashah {
    parashah: string | undefined;
    hebrew: string | undefined;
    ref: Portion | undefined;
}

export interface HebcalResponse {
    gy: number;
    gm: number;
    gd: number;
    hy: number;
    hm: string;
    hd: number;
    hebrew: string;
    events: string[];
}

export interface Item {
    category: string;
    hebrew: string;
    title: string;
    link: string;
    memo?: string;
    subcat?: string;
    date: string;
    yomtov?: boolean;
    leyning?: Leyning;
}

export interface ParashahResponse {
    location?: { geo: string };
    date?: string;
    link?: string;
    title?: string;
    items: Item[];
}

export interface Portion {
    book: string;
    begin: Pasuk;
    end: Pasuk;
}

export interface Pasuk {
    chapter: string;
    pasuk: string;
}

export interface Leyning {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    maftir: string;
    torah: string;
    haftarah: string;
}
