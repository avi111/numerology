import categories from "./categories";
import {allLetters} from "@maya259/numerology-engine";
import {language} from "../../contexts/LanguageContext";
import firebase from "../../firebase";
import {IUser} from "../../contexts/UserContext";

const availableLetter = [...allLetters, ..."0123456789".split('')];
export type Key = typeof availableLetter[number];
export type Content = { data: {[key: string]: string}, key: string }

interface IRemoteContent {
    category: string,
    content: string,
    language: language,
    user: IUser
}

interface IRemoteContentProps {
    category: categories,
    user: IUser
}

class RemoteContent implements IRemoteContent {
    category: string;
    content: string = '';
    language: language = language.HEBREW;
    user: IUser;
    userId?: string;

    constructor({category, user}: IRemoteContentProps) {
        this.user = user;
        this.userId = user?.uid;
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
            return;
        }

        return indexedDB.open(this.category as unknown as string);
    }

    async retrieveAll(): Promise<Content[]> {
        const self = this;
        const openDB = this.getDB();
        if (!openDB) return [];

        return await new Promise((resolve, reject) => {
            openDB.onsuccess = () => {
                const db = openDB?.result;
                if (db && db.objectStoreNames.contains(self.category)) {
                    const tx = openDB.result.transaction(self.category)
                    const content = tx.objectStore(self.category).getAll();
                    content.onsuccess = () => resolve(content.result as Content[]);
                    content.onerror = () => reject(content.error);
                }
            }
        })
    }

    async retrieve(key?: Key): Promise<Content> {
        const self = this;
        const openDB = this.getDB();
        if (!key) {
            return {} as Content;
        }

        return await new Promise((resolve, reject) => {
            if (!openDB) return;
            openDB.onupgradeneeded = async e => {
                await self.init(openDB);
            }
            openDB.onsuccess = () => {
                const db = openDB.result;
                if (db && db.objectStoreNames.contains(self.category)) {
                    const tx = openDB.result.transaction(self.category)
                    const content = tx.objectStore(self.category).get(key)
                    content.onsuccess = () => resolve(content.result as Content);
                    content.onerror = () => reject(content.error);
                }
            }

            openDB.onerror = () => reject(openDB.error);
        })
    }

    async init(openDB: IDBOpenDBRequest) {
        let db = openDB.result;
        if (!db.objectStoreNames.contains(this.category)) {
            db.createObjectStore(this.category, {keyPath: 'key'});

            const userContents = await firebase?.firestore().collection("contents").doc(this.userId).get();
            let contents;
            if (userContents?.exists) {
                contents = await userContents.ref.collection(this.category).get();
            } else {
                contents = await firebase?.firestore().collection("legacyContents").doc("site").collection(this.category).get();
            }

            const tx = db.transaction(this.category, "readwrite");
            contents?.forEach(doc => {
                tx.objectStore(this.category).put({data: doc.data(), key: doc.id});
            })
        }
    }
}

export default RemoteContent;