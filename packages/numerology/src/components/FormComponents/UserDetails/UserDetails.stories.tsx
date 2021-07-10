import {Meta} from "@storybook/react";
import {language} from "../../../contexts/LanguageContext";
import React, {ChangeEvent, FormEvent, useContext, useEffect, useState} from "react";
import {formProps} from "./UserDetails";
import {userDetailsPayload, userDetailsProps} from "./interface";
import {UserContext} from "../../../contexts/UserContext";
import validate from "../Profile/validate";
import classNames from "vest/classNames";
import {FieldState} from "../enums/fieldState";
import {FormContext, IFormContext} from "../../../contexts/FormContext";
import {Strategy} from "@maya259/numerology-export";
import Form from "../Components/Form";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Forms/UserDetailsWrapper',
    component: Form
} as Meta;

const Template = () => <UserDetailsProvider>
    <Form {...{formProps}}/>
</UserDetailsProvider>;

const UserDetailsProvider = ({children}: {
    children: any;
}) => {
    const userContext = useContext(UserContext);

    const [result, setResult] = useState<userDetailsPayload | null>(null);
    const [formState, setFormState] = useState((userContext.userDetails || {
        language: language.HEBREW,
        displayName: userContext.user?.displayName,
        email: userContext.user?.email,
        website: ""
    }) as userDetailsProps);
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
        action('submitted')(formState);
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

export const LoggedIn = Template.bind({});
// @ts-ignore
LoggedIn.args = {
    loggedIn: true,
    lang: language.HEBREW
}