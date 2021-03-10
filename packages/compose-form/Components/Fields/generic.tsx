import React, {ChangeEvent, InputHTMLAttributes} from "react";
import {InputType} from "../../interfaces/inputType";
import {IVestResult} from "vest/vestResult";

interface InputProps {
    name: string,
    label?: string,
    type: InputType,
    value?: string,
    className?: string,
    onChange?: (event: ChangeEvent) => void,
    result?: Partial<IVestResult>,
}

const Input = (inputProps: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
    const {
        name,
        label = name,
        type,
        value = "",
        className = "",
        onChange = () => {},
        result,
        ...props
    } = inputProps;

    const failureMessages = [
        ...result.getErrors(name),
        ...result.getWarnings(name)
    ];

    return (
        <label className={className}>
            <div className="row">
                <strong className="col-xs-4">{label}:</strong>
                {!!failureMessages.length && (
                    <span className="col-xs-8 error-container">{failureMessages[0]}</span>
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
