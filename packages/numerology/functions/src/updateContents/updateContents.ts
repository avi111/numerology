import * as functions from "firebase-functions";
import {db, status} from "../index";
import isAdmin from "../helpers";

export interface IUpdateContents {
    category: string,
    contents: { [key: string]: { [key: string]: string } },
    language: string
}

const updateContents = functions.https.onCall(async ({category, contents, language}: IUpdateContents, context) => {
    try {
        const uid = context.auth?.uid + "";
        const admin = uid && await isAdmin(uid);
        let workingDoc: FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>;

        if (admin) {
            workingDoc = await db.collection("legacyContents").doc("site");
        } else {
            workingDoc = await db.collection("contents").doc(uid);
        }

        return {
            status: status.success,
            data: await Promise.all(Object.keys(contents).map(async (key, i) => {
                const value = Object.values(contents)[i];
                return await workingDoc.collection(category).doc(key).set({
                    [language]: value
                }, {merge: true});
            }))
        }
    } catch (err) {
        return {
            status: status.failure,
            err
        }
    }
});

export default updateContents;