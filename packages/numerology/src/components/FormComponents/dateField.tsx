import React, {ChangeEvent} from "react";
import {IVestResult} from "vest/vestResult";
import {TextField} from "@material-ui/core";

interface InputProps {
    name: string,
    label?: string,
    value?: any,
    className?: string,
    onChange: (event: ChangeEvent) => void,
    result?: Partial<IVestResult>,
    placeholder?:string,
    errors?: string[];
    pending?: boolean;
    required?: boolean;
}

const DateField = (inputProps: InputProps) => {
    const {
        name,
        label = name,
        value = new Date().toISOString().split('T')[0],
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
                type: "date",
                name,
                label,
                orientation: "landscape",
                variant: "outlined",
                openTo: "date",
                value,
                onChange,
                className,
                InputLabelProps: {
                    shrink: true,
                }
            }}
        />
    );
}

export default DateField;