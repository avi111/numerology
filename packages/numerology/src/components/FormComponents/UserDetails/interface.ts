import {language} from "../../../contexts/LanguageContext";

export interface userDetailsProps {
    displayName: string;
    website: string;
    email: string;
    contents: boolean;
    language: language;
    admin: boolean;
    updatedContents: string;
    loadedContents: string;
}

export interface userDetailsPayload extends Partial<userDetailsProps> {
    displayName: string;
    website: string;
    email: string;
    contents: boolean;
    language: language;
}