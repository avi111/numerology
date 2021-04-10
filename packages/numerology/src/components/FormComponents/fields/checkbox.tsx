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

const Checkbox = (checkboxProps: CheckboxProps) => {
    const {
        name,
        label = name,
        checked = false,
        className,
        onChange
    } = checkboxProps;

    return (
        <label className={`v-center ${className}`}>
            <input
                type="checkbox"
                {
                    ...{
                        name,
                        checked,
                        onChange
                    }
                }
            />
            <small>{label}</small>
        </label>
    );
};

export default Checkbox;
