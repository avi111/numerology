import {IField} from "../field";

export interface Number extends IField {
    value: number;
    min: number;
    max: number;
}