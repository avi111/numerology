export type IHebrewInputText = IInput<string>;

export interface IInput<T> {
    name: string | undefined;
    payload: T;
}
