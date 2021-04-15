import * as admin from 'firebase-admin';
import serviceAccount from "./secrets/numerology-ae61d-firebase-adminsdk-zsoc6-8e6553fba4";
import loadContents from "./loadContents/loadContents";
import updateContents from "./updateContents/updateContents";
import updateUserData from "./updateUserData/updateUserData";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://numerology-ae61d.firebaseio.com"
});


export enum status {
    success = "success",
    failure = "failure"
}

export const db = admin.firestore();
export const userData = db.collection('userData');

exports.loadContents = loadContents
exports.updateContents = updateContents
exports.updateUserData = updateUserData