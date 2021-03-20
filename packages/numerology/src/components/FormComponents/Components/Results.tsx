import {Box, Button} from "@material-ui/core";
import React, {useContext} from "react";
import {FormContext} from "../../../contexts/FormContext";

const Result = () => {
    const {result, setResult} = useContext(FormContext);

    return (
        <Box>
            <Box>{JSON.stringify(result)}</Box>
            <Button onClick={() => setResult(null)}>Back</Button>
        </Box>
    )
}

export default Result;