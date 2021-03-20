import React from "react";
import {gender, props} from "@maya259/numerology-engine";
import { FormProvider } from "../Components/FormProvider";
import Form from "../Components/Form";
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
            <Form formProps={profileProps}/>
        </FormProvider>
    );
}
