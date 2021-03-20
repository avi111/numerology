import {DraftResult, IVestResult} from "vest/vestResult";

export interface ICreateResult {
    get: (form?: string) => DraftResult;
    reset: () => void;

    (...args: any[]): IVestResult;
}