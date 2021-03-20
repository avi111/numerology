import React, {ChangeEvent, FormEvent, useState} from "react";
import classNames from "vest/classNames";
import Input from "../fields/input";
import Button from "../fields/button";
import validate from "../Profile/validate";
import {gender, profileProps, props} from "@maya259/numerology-engine";
import {Box} from "@material-ui/core";
import DateField from '../fields/dateField';
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import SelectField from "../fields/select";
import {Profile} from "../../../numerologyEngine";

export enum FieldState {
    WARNING = "warning",
    VALID = "valid",
    INVALID = "invalid"
}

const prepareProps = (formProps: props): props => {
    return {
        ...formProps,
        birthDate: new Date(formProps.birthDate),
        birthHour: true
    }
}


export default function BusinessForm() {
    const [profile, setProfile] = useState<profileProps | null>(null);
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
        setProfile(new Profile(prepareProps(formState)))
    };

    const result = validate.get();

    const cn = classNames(result, {
        warning: FieldState.WARNING,
        invalid: FieldState.INVALID,
        valid: FieldState.VALID
    });



    return (
        <Box>
            {profile && <Box>{JSON.stringify(profile)}</Box>}
            {!profile && <form
                onSubmit={handleSubmit}
                id="profile-form"
                className="col-xs-10 col-lg-6"
            >
                <h2>Business</h2>

                <Box>
                    <Input
                        {...{
                            name: "firstName",
                            type: "text",
                            label: "First Name",
                            pending: usernamePending,
                            value: formState.firstName,
                            onChange: handleChange,
                            required: true,
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
                                required: true,
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
                                required: true,
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
                                required: true,
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
                        required: true,
                        value: formState.birthDate,
                        onChange: handleChange,
                        className: cn("birthDate"),
                        errors: [
                            ...result.getErrors("birthDate"),
                            ...result.getWarnings("birthDate")
                        ]
                    }}/>
                </Box>
                <Box>
                    <SelectField {...{
                        name: "gender",
                        label: "Gender",
                        required: true,
                        value: formState.gender,
                        options: [
                            {option: gender.MALE, value: gender.MALE},
                            {option: gender.FEMALE, value: gender.FEMALE},
                        ],
                        onChange: handleChange,
                        className: cn("gender"),
                        errors: [
                            ...result.getErrors("gender"),
                            ...result.getWarnings("gender")
                        ]
                    }} />
                </Box>
                <footer>
                    <Button className="btn-submit">Submit</Button>
                </footer>
            </form>}
        </Box>
    );
}
