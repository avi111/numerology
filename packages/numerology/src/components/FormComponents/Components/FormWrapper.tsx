import React, {useContext} from "react";
import {FormContext} from "../../../contexts/FormContext";
import {Box} from "@material-ui/core";
import {FormProps} from "../interfaces/FormProps";
import Form from "./Form";
import Results from "./Results";

const FormWrapper = ({formProps}: {formProps: FormProps}) => {
    const {result} = useContext(FormContext);

    return (
        <Box>
            {result && <Results/>}
            {!result && <Form {...{formProps}}/>}
        </Box>
    )
}

export default FormWrapper;