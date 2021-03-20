import {fieldTypes} from "../enums/fieldTypes";
import {IOption} from "../fields/select";

export interface FieldProps {
    input: fieldTypes,
    label: string,
    field: string,
    required?: true,
    placeholder?: string,
    options?: IOption[]
}