import InputTypes from '@/interfaces/inputTypes';

enum Variants {
    INFO = 'info',
    TOOLTIP = 'tooltip',
}

interface InputField {
    inputData?: string | undefined;
    type?: InputTypes | undefined;
    name: string | undefined;
    required?: boolean | undefined;
    placeholder?: string | undefined;
    tooltip?: string | undefined;
    tooltipId?: string | undefined;
    inputId?: string | undefined;
    variant?: Variants | undefined;
    max?: number;
    min?: number;
}

export default InputField;
export {
    Variants,
};
