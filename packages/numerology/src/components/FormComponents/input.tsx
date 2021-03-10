import React, {ChangeEvent, InputHTMLAttributes} from "react";
import {IVestResult} from "vest/vestResult";

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
        ...props
    } = inputProps;

    const classes = [pending && "pending", className].filter(Boolean).join(" ");

    return (
        <label className={classes}>
            <div className="row">
                <strong className="col-xs-4">{label}:</strong>
                {!!errors.length && (
                    <span className="col-xs-8 error-container">{errors[0]}</span>
                )}
            </div>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                {...props}
            />
        </label>
    );
};

export default Input;
