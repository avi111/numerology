import * as functions from "firebase-functions";
import {status} from "../index";

const updateContents = functions.https.onCall(async (data: any, context) => {
    try {
        // const uid = context.auth?.uid;

        return {
            status: status.success,
            data: {}
        };

        throw new Error("no id");
    } catch (err) {
        return {
            status: status.failure,
            err
        }
    }
});

export default updateContents;