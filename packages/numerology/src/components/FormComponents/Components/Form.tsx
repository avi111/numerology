import {Box} from "@material-ui/core";
import {v4 as uuid} from "uuid";
import Field from "./Field";
import Button from "../fields/button";
import React, {useContext} from "react";
import {FormProps} from "../interfaces/FormProps";
import {FormContext} from "../../../contexts/FormContext";

const Form = ({formProps}: {formProps: FormProps}) => {
    const {handleSubmit} = useContext(FormContext);

    return (
        <form
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
        </form>
    );
}

export default Form;