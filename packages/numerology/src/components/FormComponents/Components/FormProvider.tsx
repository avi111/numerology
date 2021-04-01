import React, {ChangeEvent, FormEvent, useState} from "react";
import {IProfileProps, IProps} from "@maya259/numerology-engine";
import {Profile} from "../../../numerologyEngine";
import validate from "../Profile/validate";
import classNames from "vest/classNames";
import {FieldState} from "../enums/fieldState";
import {FormContext, IFormContext} from "../../../contexts/FormContext";
import {Strategy} from "../../../models/form/strategy";

export const FormProvider = ({children, prepareProps}: {
    children: any;
    prepareProps: (formProps: IProps) => IProps
}) => {
    const [result, setResult] = useState<IProfileProps | null>(null);
    const [formState, setFormState] = useState({} as IProps);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e: ChangeEvent) => {
        const {
            target: {value, name}
        } = e as ChangeEvent<HTMLInputElement>;
        setFormState((state) => ({...state, [name]: value}));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        setResult(new Profile(prepareProps(formState)))
        setSubmitting(false);
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
            submitting,
            setSubmitting,
            cn,
            validationResult
        } as IFormContext<IProps, IProfileProps>}>{children}</FormContext.Provider>;
}