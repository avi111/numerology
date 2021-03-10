import React, {ButtonHTMLAttributes} from "react";
import suite from "./validate";

interface ButtonProps {
    children: string | JSX.Element,
    className: string
}


const Button = (buttonProps: ButtonProps) => {
    const {children, className = ""} = buttonProps;
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