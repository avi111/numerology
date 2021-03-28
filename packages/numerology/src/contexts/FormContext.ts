import {ChangeEvent, createContext, FormEvent} from "react";
import {DraftResult} from "vest/vestResult";
import {Strategy} from "../models/form/strategy";

export interface IFormContext<F, R> {
    strategy: Strategy;
    formState: F;
    setFormState: (state: F) => void;
    handleChange: (e: ChangeEvent) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    submitting: boolean;
    setSubmitting: (state: boolean) => void;
    result: R | null;
    setResult: (result: R | null) => void;
    cn: (fieldName: string)=>string,
    validationResult: DraftResult
}

export const FormContext = createContext<IFormContext<any, any>>({} as IFormContext<any, any>);