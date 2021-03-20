import {FieldProps} from "./FieldProps";

export interface FormProps {
    form: {
        title: string;
        id: string;
    },
    fields: FieldProps[];
}