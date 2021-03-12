import React, {ChangeEvent, FormEvent, useState} from "react";
import classNames from "vest/classNames";
import Input from "./input";
import Button from "./button";
import validate from "./validate";
import {props} from "@maya259/numerology-engine";
import {Box} from "@material-ui/core";
import DateField from './dateField';
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";

export enum FieldState {
    WARNING = "warning",
    VALID = "valid",
    INVALID = "invalid"
}

const fieldStates = Object.keys(FieldState).filter(x => isNaN(parseInt(x)));


export default function Form() {
    const [formState, setFormState] = useState({} as props);
    const [usernamePending, setUsernamePending] = useState(false);

    const runValidate = (name: string = "", value: string | boolean | MaterialUiPickersDate = "") => {
        const res = validate(
            {...formState, ...(name && {[name]: value})},
            name
        );

        if (name === "firstName") {
            setUsernamePending(true);
            res.done(() => {
                setUsernamePending(false);
            });
        }
    };
    const handleChange = (e: ChangeEvent) => {
        const {
            target: {value, name}
        } = e as ChangeEvent<HTMLInputElement>;
        setFormState((state) => ({...state, [name]: value}));
        runValidate(name, value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        runValidate();
    };

    const result = validate.get();

    const cn = classNames(result, {
        warning: FieldState.WARNING,
        invalid: FieldState.INVALID,
        valid: FieldState.VALID
    });

    return (
        <form
            onSubmit={handleSubmit}
            id="example-form"
            className="col-xs-10 col-lg-6"
        >
            <h2>Authentication</h2>

            <Box>
                <Input
                    {...{
                        name: "firstName",
                        type: "text",
                        label: "First Name",
                        pending: usernamePending,
                        value: formState.firstName,
                        onChange: handleChange,
                        className: cn("firstName"),
                        placeholder: "try: ealush",
                        errors: result.getErrors("firstName")
                    }}
                />
            </Box>
            <Box>
                <Input
                    {
                        ...{
                            name: "familyName",
                            type: "text",
                            label: "Family Name",
                            value: formState.familyName,
                            onChange: handleChange,
                            className: cn("familyName"),
                            errors: [
                                ...result.getErrors("familyName"),
                                ...result.getWarnings("familyName")
                            ]
                        }
                    }
                />
            </Box>
            <Box>
                <Input
                    {
                        ...{
                            name: "fatherName",
                            type: "text",
                            label: "Father Name",
                            value: formState.fatherName,
                            onChange: handleChange,
                            className: cn("fatherName"),
                            errors: [
                                ...result.getErrors("fatherName"),
                                ...result.getWarnings("fatherName")
                            ]
                        }
                    }
                />
            </Box>
            <Box>
                <Input
                    {
                        ...{
                            name: "motherName",
                            type: "text",
                            label: "Mother Name",
                            value: formState.motherName,
                            onChange: handleChange,
                            className: cn("motherName"),
                            errors: [
                                ...result.getErrors("motherName"),
                                ...result.getWarnings("motherName")
                            ]
                        }
                    }
                />
            </Box>
            <Box>
                <DateField {...{
                    name: "birthDate",
                    label: "Birth Date",
                    value: formState.birthDate,
                    onChange: handleChange,
                    className: cn("birthDate"),
                    errors: [
                        ...result.getErrors("birthDate"),
                        ...result.getWarnings("birthDate")
                    ]
                }}/>
            </Box>
            <footer>
                <Button className="btn-submit">Submit</Button>
            </footer>
        </form>
    );
}
