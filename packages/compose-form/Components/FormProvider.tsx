import React, {ChangeEvent, FormEvent, useState} from "react";
import {profileProps, props} from "@maya259/numerology-engine";
import {Profile} from "../../../numerologyEngine";
import validate from "../Profile/validate";
import classNames from "vest/classNames";
import {FieldState} from "../enums/fieldState";
import {FormContext, IFormContext} from "../../../contexts/FormContext";
import {Strategy} from "../../../models/form/strategy";

export const FormProvider = ({children, prepareProps}: {
    children: any;
    prepareProps: (formProps: props) => props
}) => {
    const [result, setResult] = useState<profileProps | null>(null);
    const [formState, setFormState] = useState({} as props);

    const handleChange = (e: ChangeEvent) => {
        const {
            target: {value, name}
        } = e as ChangeEvent<HTMLInputElement>;
        setFormState((state) => ({...state, [name]: value}));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(new Profile(prepareProps(formState)))
    };

    const validationResult = validate.get();
    const cn = classNames(validationResult, {
        warning: FieldState.WARNING,
        invalid: FieldState.INVALID,
        valid: FieldState.VALID
    });

    return <FormContext.Provider
        value={{
        strategy: Strategy.PROFILE,
            result,
            setResult,
            formState,
            setFormState,
            handleChange,
            handleSubmit,
            cn,
            validationResult
    } as IFormContext}>{children}</FormContext.Provider>;
}