import {ChangeEvent, createContext, FormEvent} from "react";
import {Strategy} from "../models/form/strategy";
import {profileProps, props} from "@maya259/numerology-engine";
import {DraftResult} from "vest/vestResult";

export interface IFormContext {
    strategy: Strategy.PROFILE;
    formState: props;
    setFormState: (state: props) => void;
    handleChange: (e: ChangeEvent) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    result: profileProps | null;
    setResult: (result: profileProps | null) => void;
    cn: (fieldName: string)=>string,
    validationResult: DraftResult
}

export const FormContext = createContext<IFormContext>({} as IFormContext);