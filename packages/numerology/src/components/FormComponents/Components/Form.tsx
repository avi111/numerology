import {Box, CircularProgress} from "@material-ui/core";
import {v4 as uuid} from "uuid";
import Field from "./Field";
import Button from "../fields/button";
import React, {useContext, useEffect} from "react";
import {FormContext} from "../../../contexts/FormContext";
import {LanguageContext} from "../../../contexts/LanguageContext";
import {IFormProps} from "./FormWrapper";
import {AppContext} from "../../../contexts/AppContext";

const Form = ({formProps}: { formProps: IFormProps<any, any> }) => {
    const {handleSubmit, submitting} = useContext(FormContext);
    const {getWord} = useContext(LanguageContext);
    const appContext = useContext(AppContext);
    useEffect(() => {
        appContext.setLastResult(null)
    })

    return (
        <form
            onSubmit={handleSubmit}
            id={formProps.form.id}
            className="col-xs-10 col-lg-6"
        >
            <h2>{getWord(formProps.form.title)}</h2>
            {formProps.fields.map((field, i) => (
                <Box key={uuid()}>
                    <Field {...{...field}}/>
                </Box>
            ))}
            <footer>
                <Button {...{className: "btn-submit", formProps}}>
                    <React.Fragment>
                        {getWord(formProps.form.submit || "submit")}
                        {submitting && <CircularProgress size={10}/>}
                    </React.Fragment>
                </Button>
            </footer>
        </form>
    );
}

export default Form;