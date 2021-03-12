import React from "react";
import {TextField} from "@material-ui/core";
import {InputProps} from "./input";
import "../form.scss";


const TimeField = (inputProps: InputProps) => {
    const {
        name,
        label = name,
        value = "07:30",
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
                type:"time",
                name,
                label,
                value,
                className,
                placeholder,
                required,
                variant: "standard",
                error: errors.length>0,
                inputProps: props,
                helperText: errors[0],
                onChange
            }}
        />
    );
}

export default TimeField;