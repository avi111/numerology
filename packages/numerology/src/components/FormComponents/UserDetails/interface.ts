import {language} from "../../../contexts/LanguageContext";

export interface userDetailsProps {
    displayName: string;
    website: string;
    email: string;
    contents: boolean;
    language: language;
}

export interface userDetailsPayload extends Partial<userDetailsProps> {
    displayName: string;
    website: string;
    email: string;
    contents: boolean;
    language: language;
}