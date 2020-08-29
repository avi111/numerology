const validateOnlyHebrew = (str: string, regex = /^[א-ת\s\'\"]+$/gm): boolean => {
    return regex.test(str);
};

const validateBusinessName = (str: string): boolean => {
    return validateOnlyHebrew(str, /^[א-ת\s\'\"\.]+$/gm);
};
export {validateOnlyHebrew, validateBusinessName};
