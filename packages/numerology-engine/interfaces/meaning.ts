export interface MeaningsProps {
    id: number;
    title: Content;
    slug: string;
}

interface Content {
    rendered: string;
}

export interface MeaningNormalized {
    id: number;
    title: string;
}

export interface MeaningsLink {
    title: string;
    url: string;
}
