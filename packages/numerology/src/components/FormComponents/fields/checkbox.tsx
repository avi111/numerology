import React, {ChangeEvent} from "react";

interface CheckboxProps {
    name: string,
    label?: string,
    checked?: boolean,
    className?: string,
    runValidate?: (name: string, checked: boolean) => void,
    onChange: (event: ChangeEvent) => void,
    setFormState?: any,
    errors?: string[];
    pending?: boolean;
    required?: boolean;
}

type handleChangeProps = (event: ChangeEvent<HTMLInputElement>) => void

const Checkbox = (checkboxProps: CheckboxProps) => {
    const {
        name,
        label = name,
        checked = false,
        className,
        runValidate,
        setFormState,
    } = checkboxProps;

    const handleChange: handleChangeProps = ({target: {checked, name}}) => {
        setFormState && setFormState((state: any) => ({...state, [name]: checked}));
        runValidate && runValidate(name, checked);
    };

    return (
        <label className={`v-center ${className}`}>
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={handleChange}
            />
            <small>{label}</small>
        </label>
    );
};

export default Checkbox;
