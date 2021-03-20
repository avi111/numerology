import React from "react";
import suite from "../Profile/validate";
import {Button} from "@material-ui/core";
import classnames from "classnames";
import {FormProps} from "../interfaces/FormProps";

interface ButtonProps {
    children: string | JSX.Element,
    className: string,
    formProps: FormProps
}

const ButtonComponent = (buttonProps: ButtonProps) => {
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