export interface userDetailsProps {
    displayName: string;
    website: string;
    email: string;
}

export interface userDetailsPayload extends Partial<userDetailsProps> {
    displayName: string;
    website: string;
}