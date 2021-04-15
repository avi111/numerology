import * as functions from "firebase-functions";
import {status, userData} from "../index";

const updateUserData = functions.https.onCall(async (data: any, context) => {
    try {
        const uid = context.auth?.uid;
        if (typeof uid === "string") {
            const document = await userData.doc(uid).get();
            let res;

            if (document && document.exists) {
                res = await document.ref.update({
                    ...data,
                    updated: new Date().toISOString()
                });
            } else {
                res = await document.ref.set({
                    ...data,
                    created: new Date().toISOString(),
                    updated: new Date().toISOString()
                }, {merge: true});
            }

            return {
                status: status.success,
                data: res
            };
        }

        throw new Error("no id");
    } catch (err) {
        return {
            status: status.failure,
            err
        }
    }
});

export default updateUserData