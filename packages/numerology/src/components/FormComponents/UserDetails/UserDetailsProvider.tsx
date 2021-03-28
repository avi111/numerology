import React, {ChangeEvent, FormEvent, useContext, useEffect, useState} from "react";

import validate from "../Profile/validate";
import classNames from "vest/classNames";
import {FieldState} from "../enums/fieldState";
import {FormContext, IFormContext} from "../../../contexts/FormContext";
import {Strategy} from "../../../models/form/strategy";
import {userDetailsPayload, userDetailsProps} from "./interface";
import {updateUserData} from "../../../api/usersApi/updateUserData";
import {UserContext} from "../../../contexts/UserContext";

export const UserDetailsProvider = ({children, prepareProps}: {
    children: any;
    prepareProps: (formProps: userDetailsProps) => userDetailsPayload
}) => {
    const userContext = useContext(UserContext);
    const [result, setResult] = useState<userDetailsPayload | null>(null);
    const [formState, setFormState] = useState(userContext.userDetails as userDetailsProps);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        userContext.setUserDetails(formState);
    }, [formState, userContext])

    const handleChange = (e: ChangeEvent) => {
        const {
            target: {value, name}
        } = e as ChangeEvent<HTMLInputElement>;
        setFormState((state) => ({...state, [name]: value}));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        await updateUserData(prepareProps(formState));
        setResult(prepareProps(formState));
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
        } as IFormContext<userDetailsProps, userDetailsProps>}>{children}</FormContext.Provider>;
}