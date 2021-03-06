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
                        }
                    ]
                }
            ]
        }
    ]
}

export default profile;