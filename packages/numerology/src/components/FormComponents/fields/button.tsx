import React from "react";
import suite from "../Profile/validate";
import {Button} from "@material-ui/core";
import classnames from "classnames";
import {FormProps} from "../interfaces/FormProps";
import {IFormContext} from "../../../contexts/FormContext";

interface ButtonProps<C> {
    children: string | JSX.Element,
    className: string,
    formProps: FormProps<C>
}

const ButtonComponent = (buttonProps: ButtonProps<IFormContext<any, any>>) => {
    const {children, className = "", formProps: {form: {id}}} = buttonProps;
    const result = suite.get(id);

    // @ts-ignore
    const full = document.forms[id] ? !Array.from(document.forms[id].querySelectorAll(":required")).some(i=>i.validity.valueMissing) : false;
    const error = result.hasErrors() || !full;

    return <Button {...{
        disabled: error,
        className: classnames(className, {error}),
        type: "submit"
    }}>{children}</Button>;
};

export default ButtonComponent;