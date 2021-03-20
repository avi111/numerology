import React from "react";
import {gender, props} from "@maya259/numerology-engine";
import { FormProvider } from "../Components/FormProvider";
import Form from "../Components/Form";
import { FormProps } from "../interfaces/FormProps";
import { fieldTypes } from "../enums/fieldTypes";

const formProps: FormProps = {
    form:
        {
            title: "Profile",
            id: "profile-form"
        },
    fields: [
        {
            input: fieldTypes.TEXT,
            label: "First Name",
            field: "firstName",
            required: true,
            placeholder: "try: ealush"
        },
        {
            input: fieldTypes.TEXT,
            label: "Family Name",
            field: "familyName",
            required: true
        },
        {
            input: fieldTypes.TEXT,
            label: "Father Name",
            field: "fatherName",
            required: true
        },
        {
            input: fieldTypes.TEXT,
            label: "Mother Name",
            field: "motherName",
            required: true
        },
        {
            input: fieldTypes.DATE,
            label: "Birth Date",
            field: "birthDate",
            required: true
        },
        {
            input: fieldTypes.SELECT,
            label: "Gender",
            field: "gender",
            required: true,
            options: [
                {option: gender.MALE, value: gender.MALE},
                {option: gender.FEMALE, value: gender.FEMALE},
            ]
        }
    ]
}

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
            <Form formProps={formProps}/>
        </FormProvider>
    );
}
