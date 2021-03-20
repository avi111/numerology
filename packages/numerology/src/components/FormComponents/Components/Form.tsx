import React, {useContext} from "react";
import {FormContext} from "../../../contexts/FormContext";
import {Box} from "@material-ui/core";
import {v4 as uuid} from "uuid";
import Button from "../fields/button";
import {FormProps} from "../interfaces/FormProps";
import Field from "./Field";

const Form = ({formProps}: {formProps: FormProps}) => {
    const {result, handleSubmit} = useContext(FormContext);

    return (
        <Box>
            {result && <Box>{JSON.stringify(result)}</Box>}
            {!result && <form
                onSubmit={handleSubmit}
                id={formProps.form.id}
                className="col-xs-10 col-lg-6"
            >
                <h2>{formProps.form.title}</h2>
                {formProps.fields.map((field, i) => (
                    <Box key={uuid()}>
                        <Field {...{...field}}/>
                    </Box>
                ))}
                <footer>
                    <Button {...{className: "btn-submit", formProps}}>Submit</Button>
                </footer>
            </form>}
        </Box>
    )
}

export default Form;