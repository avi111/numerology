import React, {useContext} from "react";
import {Box} from "@material-ui/core";
import {FormProps} from "../interfaces/FormProps";
import Form from "./Form";
import Results from "./Results";
import {IFormContext} from "../../../contexts/FormContext";
import {profileProps, props} from "@maya259/numerology-engine";

export type IFormProps<F, R> = FormProps<IFormContext<F, R>>;

const FormWrapper = ({formProps}: {formProps: IFormProps<props, profileProps>}) => {
    const {result} = useContext(formProps.context);

    return (
        <Box>
            {result && <Results/>}
            {!result && <Form {...{formProps}}/>}
        </Box>
    )
}

export default FormWrapper;