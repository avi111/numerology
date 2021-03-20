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
        errors = [],
        placeholder,
        required = false
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