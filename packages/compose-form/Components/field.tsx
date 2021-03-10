import {IField} from "../interfaces/field";
import Checkbox from "./Fields/checkbox";
import Text from "./Fields/text";
import Number from "./Fields/number";
import {InputType} from "../interfaces/inputType";
import React from "react";

const getComponent: (field: IField) => JSX.Element = (field) => {
    const {type, id, label} = field;

    switch (type) {
        case InputType.TEXT:
            return <Text />;
        case InputType.NUMBER:
            return <Number />;
        case InputType.CHECKBOX:
            return <Checkbox name={id}/>;
    }
}

const Field = (field: IField) => {
    return getComponent(field);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

}

export default Field;