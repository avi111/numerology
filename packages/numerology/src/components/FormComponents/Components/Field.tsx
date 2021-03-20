import {FieldProps} from "../interfaces/FieldProps";
import React, {useContext} from "react";
import {FormContext} from "../../../contexts/FormContext";
import {fieldTypes} from "../enums/fieldTypes";
import Input from "../fields/input";
import DateField from "../fields/dateField";
import SelectField from "../fields/select";

const Field = (fieldProps: FieldProps): JSX.Element => {
    const {formState, handleChange, cn, validationResult} = useContext(FormContext);
    switch (fieldProps.input) {
        case fieldTypes.TEXT:
            return <Input {...{
                name: fieldProps.field,
                type: fieldProps.input,
                label: fieldProps.label,
                // @ts-ignore
                value: formState[fieldProps.field],
                onChange: handleChange,
                required: fieldProps.required,
                className: cn(fieldProps.field),
                placeholder: fieldProps.placeholder,
                errors: [
                    ...validationResult.getErrors(fieldProps.field),
                    ...validationResult.getWarnings(fieldProps.field)
                ]
            }} />
        case fieldTypes.DATE:
            return (
                <DateField {...{
                    name: fieldProps.field,
                    type: fieldProps.input,
                    label: fieldProps.label,
                    // @ts-ignore
                    value: formState[fieldProps.field],
                    onChange: handleChange,
                    required: fieldProps.required,
                    className: cn(fieldProps.field),
                    errors: [
                        ...validationResult.getErrors(fieldProps.field),
                        ...validationResult.getWarnings(fieldProps.field)
                    ]
                }}/>
            )
        case fieldTypes.SELECT:
            if (fieldProps.options) {
                return (
                    <SelectField {...{
                        name: fieldProps.field,
                        required: fieldProps.required,
                        label: fieldProps.label,
                        // @ts-ignore
                        value: formState[fieldProps.field],
                        options: fieldProps.options,
                        onChange: handleChange,
                        className: cn(fieldProps.field),
                        errors: [
                            ...validationResult.getErrors(fieldProps.field),
                            ...validationResult.getWarnings(fieldProps.field)
                        ]
                    }} />
                )
            }
    }

    return <></>
}

export default Field;