import React from "react";
import suite from "../Profile/validate";
import {Button} from "@material-ui/core";
import classnames from "classnames";

interface ButtonProps {
    children: string | JSX.Element,
    className: string
}

const ButtonComponent = (buttonProps: ButtonProps) => {
    const {children, className = ""} = buttonProps;
    const result = suite.get("user_form");

    // @ts-ignore
    const full = document.forms["profile-form"] ? !Array.from(document.forms["profile-form"].querySelectorAll(":required")).some(i=>i.validity.valueMissing) : false;
    console.log(full);
    const error = result.hasErrors() || !full;

    return <Button {...{
        disabled: error,
        className: classnames(className, {error}),
        type: "submit"
    }}>{children}</Button>;
};

export default ButtonComponent;