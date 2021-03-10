import * as Form from "@maya259/compose-form";

console.log(Form);

const profile: Form.Schema = {
    "sections": [
        {
            "rows": [
                {
                    "fields": [
                        {
                            "type": Form.InputType.TEXT,
                            "id": "firstName",
                            "label": "First Name"
                        },
                        {
                            "type": Form.InputType.TEXT,
                            "id": "lastname",
                            "label": "Last Name"
                        },
                        {
                            "type": Form.InputType.DATE,
                            "id": "birthdate",
                            "label": "Birth Date"
                        }
                    ]
                }
            ]
        }
    ]
}

export default profile;