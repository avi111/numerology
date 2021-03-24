import {FieldProps} from "./FieldProps";
import {Context} from "react";

export interface FormProps<C> {
    form: {
        title: string;
        id: string;
        submit?: string;
    },
    context: Context<C>;
    fields: FieldProps[];
}