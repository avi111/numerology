import {Box, Button} from "@material-ui/core";
import React, {useContext} from "react";
import {FormContext} from "../../../contexts/FormContext";
import ProfileReport from "../../Results/FullReports/ProfileReport/ProfileReport";

const Result = () => {
    const {result, setResult} = useContext(FormContext);

    return (
        <Box>
            <Box>
                <ProfileReport profile={result} />
            </Box>
            <Button onClick={() => setResult(null)}>Back</Button>
        </Box>
    )
}

export default Result;