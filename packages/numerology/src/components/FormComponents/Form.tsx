import React, {ChangeEvent, FormEvent, useState} from "react";
import classNames from "vest/classNames";
import Input from "./input";
import Checkbox from "./checkbox";
import Button from "./button";
import validate from "./validate";

interface FormState {
    username: string;
    password: string;
    confirm_password: string;
    email: string;
    tos: boolean;
}

export default function Form() {
    const [formState, setFormState] = useState({} as FormState);
    const [usernamePending, setUsernamePending] = useState(false);

    const runValidate = (name: string = "", value: string | boolean = "") => {
        const res = validate(
            {...formState, ...(name && {[name]: value})},
            name
        );

        if (name === "username") {
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
        warning: "warning",
        invalid: "invalid",
        valid: "valid"
    });

    return (
        <form
            onSubmit={handleSubmit}
            id="example-form"
            className="col-xs-10 col-lg-6"
        >
            <h2>Authentication</h2>

            <Input
                name="firstName"
                type="text"
                label="First Name"
                pending={usernamePending}
                value={formState.username}
                onChange={handleChange}
                className={cn("firstName")}
                placeholder="try: ealush"
                errors={result.getErrors("firstName")}
            />
            <Input
                {
                    ...{
                        name: "password",
                        type: "password",
                        label: "Password",
                        value: formState.password,
                        onChange: handleChange,
                        className: cn("password"),
                        errors: [
                            ...result.getErrors("password"),
                            ...result.getWarnings("password")
                        ]
                    }
                }
            />
            <Input
                name="confirm_password"
                type="password"
                label="Confirm Password"
                value={formState.confirm_password}
                onChange={handleChange}
                errors={result.getErrors("confirm_password")}
                className={cn("confirm_password")}
            />
            <Input
                type="email"
                name="email"
                label="Email"
                value={formState.email}
                onChange={handleChange}
                errors={result.getErrors("email")}
                className={cn("email")}
            />
            <Checkbox
                name="tos"
                checked={formState.tos}
                setFormState={setFormState}
                label="I have read and agreed to the terms of service."
                runValidate={runValidate}
                className={cn("tos")}
            />
            <footer>
                <Button className="btn-submit">Submit</Button>
            </footer>
        </form>
    );
}
