import React, {ButtonHTMLAttributes} from "react";
import {IVestResult} from "vest/vestResult";

interface ButtonProps {
    children: string | JSX.Element,
    suite: IVestResult & any,
    className: string
}


const Button = (buttonProps: ButtonProps) => {
    const {children, suite, className = ""} = buttonProps;
    const result = suite.get("user_form");

    const props: ButtonHTMLAttributes<never> = {
        className
    };

    if (result.hasErrors()) {
        props.disabled = true;
        props.className = `${props.className} error`;
    }

    return <button {...props}>{children}</button>;
};

export default Button;