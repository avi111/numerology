import React from "react";
import ComposeForm, {Schema} from "@maya259/compose-form";
import {forms} from "./forms";
import profile from "./profile";

const Adapter = {
    [forms.PROFILE]: profile
}

export interface FormProps {
    form: forms
}

const Form = ({form}: FormProps) => {
    return ComposeForm(Adapter[form] as Schema);
}

export default Form;
export {forms};