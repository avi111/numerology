import React, {ChangeEvent, FormEvent, useContext, useEffect, useState} from "react";

import validate from "../Profile/validate";
import classNames from "vest/classNames";
import {FieldState} from "../enums/fieldState";
import {FormContext, IFormContext} from "../../../contexts/FormContext";
import {Strategy} from "@maya259/numerology-export";
import {userDetailsPayload, userDetailsProps} from "./interface";
import {updateUserData} from "../../../api/usersApi/updateUserData";
import {UserContext} from "../../../contexts/UserContext";
import {language, LanguageContext} from "../../../contexts/LanguageContext";

export const UserDetailsProvider = ({children, prepareProps}: {
    children: any;
    prepareProps: (formProps: userDetailsProps) => userDetailsPayload
}) => {
    const userContext = useContext(UserContext);
    const langContext = useContext(LanguageContext);

    const [result, setResult] = useState<userDetailsPayload | null>(null);
    const [formState, setFormState] = useState((userContext.userDetails || {
        language: language.HEBREW,
        displayName: userContext.user?.displayName,
        email: userContext.user?.email,
        website: "",
        contents: false
    }) as userDetailsProps);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        userContext.setUserDetails(formState);
    }, [formState, userContext])

    const handleChange = (e: ChangeEvent) => {
        const {
            target: {value, name, checked, type}
        } = e as ChangeEvent<HTMLInputElement>;
        let deliveredValue: string | boolean;

        if (type === "checkbox") {
            deliveredValue = checked;
        } else {
            deliveredValue = value;
        }
        setFormState((state) => ({...state, [name]: deliveredValue}));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        await updateUserData(prepareProps(formState));
        setResult(prepareProps(formState));
        setSubmitting(false);

        if (userContext.userDetails) {
            const lang = userContext.userDetails?.language || language.HEBREW;
            langContext.setCurrentLanguage(lang);
            userContext.setEnableEditContents(userContext.userDetails?.contents || false)
        }
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