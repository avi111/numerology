import React from "react";
import {props} from "@maya259/numerology-engine";
import {FormProvider} from "./Components/FormProvider";
import Form from "./Components/Form";
import {FormProps} from "./interfaces/FormProps";
import { fieldTypes } from "./enums/fieldTypes";

export interface IComposeForm {
    prepareProps: (formProps: props) => props;
    formProps: FormProps;
}
export default function ComposeForm({formProps, prepareProps}: IComposeForm) {
    return (
        <FormProvider {...{prepareProps}}>
            <Form formProps={formProps}/>
        </FormProvider>
    );
}

export {
    FormProps,
    fieldTypes
}