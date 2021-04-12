import React from 'react';
import "./_EditContents.scss";
import {Box} from "@material-ui/core";
import VerticalTabs from "./VerticalTabs";

function EditContents() {
    return (<Box className="EditContents">
        <VerticalTabs/>
    </Box>);
}

export default EditContents;
