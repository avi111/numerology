import React, {ChangeEvent, InputHTMLAttributes} from "react";
import {IVestResult} from "vest/vestResult";
import {TextField} from "@material-ui/core";
import classnames from 'classnames';

interface InputProps {
    name: string,
    label?: string,
    type: string,
    value?: any,
    className?: string,
    onChange: (event: ChangeEvent) => void,
    result?: Partial<IVestResult>,
    errors?: string[];
    pending?: boolean;
    required?: boolean;
}

const Input = (inputProps: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
    const {
        name,
        label = name,
        type,
        value = "",
        className = "",
        onChange = () => {
        },
        pending,
        errors = [],
        placeholder,
        required = false,
        ...props
    } = inputProps;

    const classes = [pending && "pending", className].filter(Boolean).join(" ");

    return (
            <TextField
                {...{
                    type,
                    name,
                    label,
                    value,
                    onChange,
                    className: classnames(className, classes),
                    placeholder,
                    required,
                    error: errors.length>0,
                    inputProps: props,
                    helperText: errors[0]
                }}
            />
    );
};

export default Input;
