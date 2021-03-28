import React, {useContext} from "react"
import {FormProps} from "../interfaces/FormProps";
import {FormContext, IFormContext} from "../../../contexts/FormContext";
import {fieldTypes} from "../enums/fieldTypes";
import Form from "../Components/Form";
import {UserDetailsProvider} from "./UserDetailsProvider";
import {userDetailsProps} from "./interface";
import {languages} from "../../../consts/languages";
import {UserContext} from "../../../contexts/UserContext";
import {CircularProgress} from "@material-ui/core";

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
            field: "displayName"
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
        },
        {
            input: fieldTypes.SELECT,
            label: "Language",
            field: "language",
            options: Array.from(languages.keys()).map(lang => {
                return {
                    option: `${languages.get(lang)?.engName} (${languages.get(lang)?.originName})` || "",
                    value: lang
                }
            })
        }
    ]
}

export const prepareProps = (formProps: userDetailsProps): userDetailsProps => {
    return {
        ...formProps
    }
}

export const UserDetailsWrapper = () => {
    const userContext = useContext(UserContext);
    return userContext.userDetails ? (
        <UserDetailsProvider prepareProps={prepareProps}>
            <Form {...{formProps}}/>
        </UserDetailsProvider>
    ) : <CircularProgress/>
}