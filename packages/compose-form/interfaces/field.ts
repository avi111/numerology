import {InputType} from "./inputType";

export interface IField {
    type: InputType;
    id: string;
    label?: string;
}