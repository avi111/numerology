import {FieldProps} from "../interfaces/FieldProps";
import React, {useContext} from "react";
import {FormContext} from "../../../contexts/FormContext";
import {fieldTypes} from "../enums/fieldTypes";
import Input from "../fields/input";
import DateField from "../fields/dateField";
import SelectField from "../fields/select";
import {LanguageContext} from "../../../contexts/LanguageContext";
import Checkbox from "../fields/checkbox";

const Field = (fieldProps: FieldProps): JSX.Element => {
    const {getWord} = useContext(LanguageContext);
    const {formState, handleChange, cn, validationResult} = useContext(FormContext);
    switch (fieldProps.input) {
        case fieldTypes.TEXT:
            return <Input {...{
                name: fieldProps.field,
                label: getWord(fieldProps.label),
                // @ts-ignore
                value: formState[fieldProps.field],
                onChange: handleChange,
                required: fieldProps.required,
                className: cn(fieldProps.field),
                errors: [
                    ...validationResult.getErrors(fieldProps.field),
                    ...validationResult.getWarnings(fieldProps.field)
                ]
            }} />
        case fieldTypes.CHECKBOX:
            return (
                <Checkbox
                    {...{
                        name: fieldProps.field,
                        type: fieldProps.input,
                        label: getWord(fieldProps.label),
                        // @ts-ignore
                        checked: formState[fieldProps.field] || false,
                        onChange: handleChange,
                        required: fieldProps.required,
                        className: cn(fieldProps.field),
                        errors: [
                            ...validationResult.getErrors(fieldProps.field),
                            ...validationResult.getWarnings(fieldProps.field)
                        ]
                    }}/>
            )
        case fieldTypes.DATE:
            return (
                <DateField {...{
                    name: fieldProps.field,
                    type: fieldProps.input,
                    label: getWord(fieldProps.label),
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
                        label: getWord(fieldProps.label),
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