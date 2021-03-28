import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import serviceAccount from "./secrets/numerology-ae61d-firebase-adminsdk-zsoc6-8e6553fba4";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://numerology-ae61d.firebaseio.com"
});


export enum status {
    success = "success",
    failure = "failure"
}

const db = admin.firestore();
const userData = db.collection('userData');

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});

exports.updateUserData = functions.https.onCall(async (data: any, context) => {
    try {
        const uid = context.auth?.uid;
        if (typeof uid === "string") {
            let document = await userData.doc(uid).get();
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
