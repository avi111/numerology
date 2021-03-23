import React, {ChangeEvent, SelectHTMLAttributes, useContext} from "react";
import {IVestResult} from "vest/vestResult";
import {FormControl, InputLabel, NativeSelect, NativeSelectProps} from "@material-ui/core";
import {v4 as uuidv4} from "uuid";
import {LanguageContext} from "../../../contexts/LanguageContext";

export interface IOption {
    option: string,
    value: string
}

export interface InputProps {
    name: string,
    label?: string,
    type?: string,
    value?: string,
    options: IOption[]
    className?: string,
    onChange: (event: ChangeEvent) => void,
    result?: Partial<IVestResult>,
    placeholder?: string,
    errors?: string[];
    pending?: boolean;
    required?: boolean;
}

const SelectField = (inputProps: InputProps & NativeSelectProps & SelectHTMLAttributes<HTMLSelectElement>) => {
    const {getWord} = useContext(LanguageContext);

    const {
        name,
        options,
        label = name,
        value = "",
        className = "",
        onChange = () => {
        },
        errors = [],
        ...props
    } = inputProps;

    const error = errors.length > 0;
    const id = uuidv4();
    return (
        <FormControl {...{className, error}} >
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <NativeSelect
                {...{
                    value,
                    onChange,
                    name,
                    inputProps: props,
                }}
                inputProps={{
                    id,
                }}
            >
                {options.map((option: IOption) => <option key={uuidv4()} value={option.value}>{getWord(option.option)}</option>)}
            </NativeSelect>
            {error && <p className="MuiFormHelperText-root Mui-error MuiFormHelperText-filled">{errors[0]}</p>}
        </FormControl>
    );
};

export default SelectField;
