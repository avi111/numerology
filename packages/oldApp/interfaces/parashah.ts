interface Parashah {
    parashah: string | undefined;
    hebrew: string | undefined;
    ref: Portion | undefined;
}

interface HebcalResponse {
    gy: number;
    gm: number;
    gd: number;
    hy: number;
    hm: string;
    hd: number;
    hebrew: string;
    events: string[];
}

interface Item {
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

interface ParashahResponse {
    location?: { geo: string };
    date?: string;
    link?: string;
    title?: string;
    items: Item[];
}

interface Portion {
    book: string;
    begin: Pasuk;
    end: Pasuk;
}

interface Pasuk {
    chapter: string;
    pasuk: string;
}

interface Leyning {
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

export {
    Parashah,
    Pasuk,
    ParashahResponse,
    Item,
    Leyning,
    HebcalResponse,
    Portion,
};
