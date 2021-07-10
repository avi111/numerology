import {FormProps} from "../interfaces/FormProps";
import {fieldTypes} from "../enums/fieldTypes";
import {Gender, ProfileProps, Props} from "@maya259/numerology-engine";
import {FormContext, IFormContext} from "../../../contexts/FormContext";

const _profileProps: FormProps<IFormContext<Props, ProfileProps>> = {
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
            field: "Gender",
            required: true,
            options: [
                {option: Gender.MALE, value: Gender.MALE},
                {option: Gender.FEMALE, value: Gender.FEMALE},
            ]
        }
    ]
}

export default _profileProps;