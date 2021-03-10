import React from "react";
import {IRow} from "../interfaces/row";
import Field from "./field";

const Row = (row: IRow) => {
    return row.fields.map((field, i) => <Field key={i} {...field} />)
}

export default Row;