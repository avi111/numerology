import React, {ChangeEvent, InputHTMLAttributes} from "react";
import {IVestResult} from "vest/vestResult";
import {TextField} from "@material-ui/core";
import {TextFieldProps} from "@material-ui/core/TextField/TextField";

interface InputProps {
    name: string,
    label?: string,
    type: string,
    value?: string,
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
        <label className={classes}>
            <div className="row">
                {!!errors.length && (
                    <span className="col-xs-8 error-container">{errors[0]}</span>
                )}
            </div>
            <TextField
                {...{
                    type,
                    name,
                    label,
                    defaultValue: value,
                    onChange,
                    className,
                    placeholder,
                    required,
                    error: errors.length>0,
                    inputProps: props
                }}
            />
        </label>
    );
};

export default Input;
