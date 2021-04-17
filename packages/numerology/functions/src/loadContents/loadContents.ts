import * as functions from "firebase-functions";
import {db, status} from "../index";

const collectionToData = async (document: FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>) => {
    const collections = await document.ref.listCollections();
    const allDocs = await Promise.all(collections.map(async collection => {
        return {
            docs: await collection.get(),
            id: collection.id
        };
    }))

   return allDocs.map(({docs, id}) => {
        return {
            id,
            data: docs.docs.reduce((obj, current) => {
                 obj[current.id] = current.data();
                 return obj;
            }, {} as {[key: string]: FirebaseFirestore.DocumentData})
        }
    });
}

export const loadByUserId = async (userId: string) => {
    const userContents = await db.collection("contents").doc(userId).get();

    return await new Promise(async resolve => {
        if (userContents?.exists) {
            resolve(await collectionToData(userContents))
        } else {
            const siteContents = await db.collection("legacyContents").doc("site").get();
            resolve(await collectionToData(siteContents));
        }
    })
}

const loadContents = functions.https.onCall(async (data, context) => {
    try {
        const userId = context.auth?.uid;
        if (!userId) {
            throw new Error("no id");
        }

        await db.collection("userData").doc(userId).set({
            loadedContents: new Date(Date.now()).toISOString()
        }, {merge: true})

        return {
            status: status.success,
            data: await loadByUserId(userId)
        }
    } catch (err) {
        return {
            status: status.failure,
            err
        }
    }
});

export default loadContents;