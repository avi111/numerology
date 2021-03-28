import React from "react"
import {FormProps} from "../interfaces/FormProps";
import {FormContext, IFormContext} from "../../../contexts/FormContext";
import {fieldTypes} from "../enums/fieldTypes";
import Form from "../Components/Form";
import {UserDetailsProvider} from "./UserDetailsProvider";
import {userDetailsProps} from "./interface";

const formProps: FormProps<IFormContext<userDetailsProps, userDetailsProps>> = {
    form:
        {
            title: "User Details",
            id: "user-details",
            submit: "save"
        },
    context: FormContext,
    fields: [
        {
            input: fieldTypes.TEXT,
            label: "Display Name",
            field: "displayName",
            placeholder: "try: ealush"
        },
        {
            input: fieldTypes.TEXT,
            label: "Website",
            field: "website"
        },
        {
            input: fieldTypes.TEXT,
            label: "Email",
            field: "email"
        }
    ]
}

export const UserDetailsWrapper = () => {
    const prepareProps = (formProps: userDetailsProps): userDetailsProps => {
        return {
            ...formProps
        }
    }

    return <UserDetailsProvider prepareProps={prepareProps}>
        <Form {...{formProps}}/>
    </UserDetailsProvider>
}