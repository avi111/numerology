import React, {FormEvent} from "react";
import {Schema} from "./interfaces/schema";
import {InputType} from "./interfaces/inputType"

export interface ComposeFormProps {
    schema?: Schema,
    onSubmit?: (e: FormEvent) => void
}

const ComposeForm = ({schema, onSubmit}: ComposeFormProps): JSX.Element => {
    return (
        <form onSubmit={(event => {
            event.preventDefault();
            onSubmit && onSubmit(event);
        })}>
            <div>{JSON.stringify(schema)}</div>
            <input type="submit" value="submit"/>
        </form>
    );
}

export default ComposeForm;
export type IT = InputType;

export {
    Schema as Schema,
    InputType as InputType
}
