import Props from "./props";

interface MinimalInput extends Partial<Props> {
    firstName: string;
    lastName: string;
    birthDate: Date;
}

export default MinimalInput;
