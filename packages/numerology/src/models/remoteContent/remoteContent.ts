import categories from "./categories";
import {allLetters} from "@maya259/numerology-engine";
import {language} from "../../contexts/LanguageContext";
import firebase from "../../firebase";
import {IUser} from "../../contexts/UserContext";
import {updateContents} from "../../api/usersApi/updateContents";

const availableLetter = [...allLetters, ..."0123456789".split('')];
export type Key = typeof availableLetter[number];
export type Content = { data: { [key: string]: string }, key: string }

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

        let prefix = process.env.STORYBOOK_PREFIX || '';

        return indexedDB.open(`${prefix}contents` as string);
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

            openDB.onupgradeneeded = async e => {
                await self.init(openDB);
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
            openDB.onsuccess = async () => {
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

    async loadContents(openDB: IDBOpenDBRequest, category: categories) {
        let db = openDB.result;
        const userContents = await firebase?.firestore().collection("contents").doc(this.userId).get();
        let contents;
        if (userContents?.exists) {
            contents = await userContents.ref.collection(category).get();
        } else {
            contents = await firebase?.firestore().collection("legacyContents").doc("site").collection(category).get();
        }

        const tx = db.transaction(category, "readwrite");
        contents?.forEach(doc => {
            tx.objectStore(category).put({data: doc.data(), key: doc.id});
        })
    }

    async init(openDB: IDBOpenDBRequest) {
        let db = openDB.result;
        for (const category of Object.values(categories)) {
            if (!db.objectStoreNames.contains(category)) {
                db.createObjectStore(category, {keyPath: 'key'});
            }
        }

        for (const category of Object.values(categories)) {
            await this.loadContents(openDB, category)
        }
    }

    async updateRemotely(contents: { [key: string]: string }) {
        const {category} = this;
        await updateContents({category, contents});
    }

    async updateLocally(contents: { [key: string]: string }) {
        const openDB = this.getDB();
        const {category} = this;
        if (!openDB) return;

        openDB.onsuccess = async () => {
            let db = openDB.result;

            const tx = db.transaction(category, "readwrite");
            Object.values(contents)?.forEach((value, i) => {
                const action = tx.objectStore(category).put({data: value, key: Object.keys(contents)[i]});
                action.onsuccess = () => console.log(action.result)
                action.onerror = () => console.log(action.error)
            })
        }
    }
}

export default RemoteContent;