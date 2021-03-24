import React, {ChangeEvent, FormEvent, useState} from "react";

import validate from "../Profile/validate";
import classNames from "vest/classNames";
import {FieldState} from "../enums/fieldState";
import {FormContext, IFormContext} from "../../../contexts/FormContext";
import {Strategy} from "../../../models/form/strategy";
import {userDetailsProps} from "./UserDetails";

export const UserDetailsProvider = ({children, prepareProps}: {
    children: any;
    prepareProps: (formProps: userDetailsProps) => userDetailsProps
}) => {
    const [result, setResult] = useState<userDetailsProps | null>(null);
    const [formState, setFormState] = useState({} as userDetailsProps);

    const handleChange = (e: ChangeEvent) => {
        const {
            target: {value, name}
        } = e as ChangeEvent<HTMLInputElement>;
        setFormState((state) => ({...state, [name]: value}));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(prepareProps(formState))
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
        } as IFormContext<userDetailsProps, userDetailsProps>}>{children}</FormContext.Provider>;
}