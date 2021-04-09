import categories from "./categories";
import {allLetters} from "@maya259/numerology-engine";
import {language} from "../../contexts/LanguageContext";
import firebase from "../../firebase";

const availableLetter = [...allLetters, ..."0123456789".split('')];
export type Key = typeof availableLetter[number];

interface IRemoteContent {
    category: string,
    content: string,
    language: language,
    user: firebase.default.User
}

interface IRemoteContentProps {
    category: categories,
    user: firebase.default.User
}

class RemoteContent implements IRemoteContent {
    category: string;
    content: string = '';
    language: language = language.HEBREW;
    user;
    userId: string;

    constructor(props: IRemoteContentProps) {
        const {category, user} = props;
        this.user = user;
        this.userId = user.uid;
        this.category = category as unknown as string;

        for (let prop of Object.getOwnPropertyNames(RemoteContent.prototype)) {
            // @ts-ignore
            if (typeof this[prop] === "function") {
                // @ts-ignore
                this[prop] = this[prop].bind(this);
            }
        }
    }

    getDB() {
        if (!('indexedDB' in window)) {
            return indexedDB.open(this.category as unknown as string, 1);
        }
    }

    async retrieve(key: Key) {
        const self = this;
        const openDB = this.getDB();

        return await new Promise((resolve, reject) => {
            if (!openDB) return;
            openDB.onupgradeneeded = async e => await self.init(openDB);
            openDB.onsuccess = () => {
                if (openDB) {
                    const tx = openDB.result.transaction(self.category)
                    const content = tx.objectStore(self.category).get(key)
                    content.onsuccess = () => resolve(content.result);
                    content.onerror = () => reject(content.error);
                    tx.oncomplete = () => openDB.result.close();
                }
            }

            openDB.onerror = () => reject(openDB.error);
        })
    }

    async init(openDB: IDBOpenDBRequest) {
        let db = openDB.result;
        if (!db.objectStoreNames.contains(this.category)) {
            const store = db.createObjectStore(this.category, {keyPath: 'key'});
            const userContents = await firebase?.firestore().collection("contents").doc(this.userId).get();
            let contents;
            if (userContents?.exists) {
                contents = await userContents.ref.collection(this.category).get();
            } else {
                contents = await firebase?.firestore().collection("legacyContents").get();
            }

            contents?.forEach(doc => {
                store.add(doc.data(), doc.id);
            })
        }
    }
}

export default RemoteContent;