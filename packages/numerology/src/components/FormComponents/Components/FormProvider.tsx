import React, {ChangeEvent, FormEvent, useContext, useState} from "react";
import {IProfileProps, IProps} from "@maya259/numerology-engine";
import {Profile} from "../../../numerologyEngine";
import validate from "../Profile/validate";
import classNames from "vest/classNames";
import {FieldState} from "../enums/fieldState";
import {FormContext, IFormContext} from "../../../contexts/FormContext";
import {Strategy} from "../../../models/form/strategy";
import {AppContext} from "../../../contexts/AppContext";

export const FormProvider = ({children, prepareProps}: {
    children: any;
    prepareProps: (formProps: IProps) => IProps
}) => {
    const appContext = useContext(AppContext);
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
        const res = new Profile(prepareProps(formState));
        setResult(res)
        appContext.setLastResult({result: res, strategy: Strategy.PROFILE})
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