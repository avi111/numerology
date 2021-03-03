import {Field} from "../field";

export interface Number extends Field {
    value: number;
    min: number;
    max: number;
}