import {FormEvent} from "react";
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
    return ComposeForm({
        schema: Adapter[form] as Schema,
        onSubmit: (e: FormEvent) => {
            console.log(e);
        }
    });
}

export default Form;
export {forms};