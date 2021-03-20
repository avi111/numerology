import React from "react";
import {TextField} from "@material-ui/core";
import {InputProps} from "./input";
import "../../form.scss";


const DateField = (inputProps: InputProps) => {
    const {
        name,
        label = name,
        value = new Date().toISOString(),
        className = "",
        onChange = () => {
        },
        pending,
        errors = [],
        placeholder,
        required = false,
        ...props
    } = inputProps;

    return (
        <TextField
            {...{
                type: "datetime-local",
                name,
                label,
                value,
                className,
                placeholder,
                required,
                error: errors.length>0,
                inputProps: props,
                helperText: errors[0],
                onChange,
                InputLabelProps: {
                    shrink: true,
                }
            }}
        />
    );
}

export default DateField;