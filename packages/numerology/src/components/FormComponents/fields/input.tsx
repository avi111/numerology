import React, {ChangeEvent, InputHTMLAttributes} from "react";
import {IVestResult} from "vest/vestResult";
import {TextField} from "@material-ui/core";

export interface InputProps {
    name: string,
    label?: string,
    type?: string,
    value?: any,
    className?: string,
    onChange: (event: ChangeEvent) => void,
    result?: Partial<IVestResult>,
    placeholder?:string,
    errors?: string[];
    pending?: boolean;
    required?: boolean;
}

const Input = (inputProps: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
    const {
        name,
        label = name,
        type = "text",
        value = "",
        className = "",
        onChange = () => {
        },
        errors = [],
        placeholder,
        required = false
    } = inputProps;

    return (
            <TextField
                {...{
                    type,
                    name,
                    label,
                    value,
                    onChange,
                    className,
                    placeholder,
                    required,
                    error: errors.length>0,
                    helperText: errors[0],
                    variant: "standard"
                }}
            />
    );
};

export default Input;
