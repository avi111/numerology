import {Meta} from "@storybook/react";
import {language} from "../../../contexts/LanguageContext";
import React, {ChangeEvent, FormEvent, useState} from "react";
import {prepareProps} from "./ProfileForm";
import {IProfileProps, IProps} from "@maya259/numerology-engine";
import {Profile} from "../../../numerologyEngine";
import validate from "./validate";
import classNames from "vest/classNames";
import {FieldState} from "../enums/fieldState";
import {FormContext, IFormContext} from "../../../contexts/FormContext";
import {Strategy} from "../../../models/form/strategy";
import {action} from "@storybook/addon-actions";
import FormWrapper from "../Components/FormWrapper";
import _profileProps from "../props/profile";

export default {
    title: 'Forms/ProfileForm',
    component: FormWrapper
} as Meta;

const Template = () => <FormProvider>
    <FormWrapper formProps={_profileProps}/>
</FormProvider>;

const FormProvider = ({children}: {
    children: any;
}) => {
    const [result, setResult] = useState<IProfileProps | null>(null);
    const [formState, setFormState] = useState({} as IProps);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e: ChangeEvent) => {
        const {
            target: {value, name}
        } = e as ChangeEvent<HTMLInputElement>;
        setFormState((state: IProps) => ({...state, [name]: value}));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);
        action("submitted")(new Profile(prepareProps(formState)))
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

export const LoggedIn = Template.bind({});

// @ts-ignore
LoggedIn.args = {
    loggedIn: true,
    lang: language.HEBREW
}
