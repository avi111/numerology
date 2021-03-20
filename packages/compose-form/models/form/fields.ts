export enum inputTypes {
    TEXT="text",
}

export interface fields {
    name: string,
    type: inputTypes,
    label: string,
    onChange: () => void,
    required: true
}