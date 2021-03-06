import React from "react";
import {Schema} from "./interfaces/schema";
import {InputType} from "./interfaces/inputType"

const ComposeForm = (schema?: Schema): JSX.Element => {
    return <div>{JSON.stringify(schema)}</div>;
}

export default ComposeForm;
export type IT = InputType;

export {
    Schema as Schema,
    InputType as InputType
}
