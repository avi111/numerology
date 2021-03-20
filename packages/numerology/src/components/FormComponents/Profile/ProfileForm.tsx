import React from "react";
import {props} from "@maya259/numerology-engine";
import { FormProvider } from "../Components/FormProvider";
import FormWrapper from "../Components/FormWrapper";
import profileProps from "../props/profile";


export default function ProfileForm() {
    const prepareProps = (formProps: props): props => {
        return {
            ...formProps,
            birthDate: new Date(formProps.birthDate),
            birthHour: true
        }
    }

    return (
        <FormProvider {...{prepareProps}}>
            <FormWrapper formProps={profileProps}/>
        </FormProvider>
    );
}
