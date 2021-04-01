import React from "react";
import {IProps} from "@maya259/numerology-engine";
import {FormProvider} from "../Components/FormProvider";
import FormWrapper from "../Components/FormWrapper";
import profileProps from "../props/profile";

export const prepareProps = (formProps: IProps): IProps => {
    return {
        ...formProps,
        birthDate: new Date(formProps.birthDate),
        birthHour: true
    }
}

export default function ProfileForm() {


    return (
        <FormProvider {...{prepareProps}}>
            <FormWrapper formProps={profileProps}/>
        </FormProvider>
    );
}
