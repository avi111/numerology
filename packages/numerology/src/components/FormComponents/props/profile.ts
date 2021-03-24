import {FormProps} from "../interfaces/FormProps";
import {fieldTypes} from "../enums/fieldTypes";
import {gender, profileProps, props} from "@maya259/numerology-engine";
import {FormContext, IFormContext} from "../../../contexts/FormContext";

const _profileProps: FormProps<IFormContext<props, profileProps>> = {
    form:
        {
            title: "Profile",
            id: "profile-form"
        },
    context: FormContext,
    fields: [
        {
            input: fieldTypes.TEXT,
            label: "First Name",
            field: "firstName",
            required: true,
            placeholder: "try: ealush"
        },
        {
            input: fieldTypes.TEXT,
            label: "Family Name",
            field: "familyName",
            required: true
        },
        {
            input: fieldTypes.TEXT,
            label: "Father Name",
            field: "fatherName",
            required: true
        },
        {
            input: fieldTypes.TEXT,
            label: "Mother Name",
            field: "motherName",
            required: true
        },
        {
            input: fieldTypes.DATE,
            label: "Birth Date",
            field: "birthDate",
            required: true
        },
        {
            input: fieldTypes.SELECT,
            label: "Gender",
            field: "gender",
            required: true,
            options: [
                {option: gender.MALE, value: gender.MALE},
                {option: gender.FEMALE, value: gender.FEMALE},
            ]
        }
    ]
}

export default _profileProps;