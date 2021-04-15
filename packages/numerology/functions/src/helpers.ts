import {db} from "./index";

const isAdmin = async (uid: string) => {
    const userData = await db.collection("userData").doc(uid).get();
    return userData && userData.exists && userData.data()?.hasOwnProperty("admin") && userData.data()?.admin;
}

export enum language {
    HEBREW = "he_IL",
    ENGLISH = "en_US",
    RUSSIAN = "ru_RU"
}

export default isAdmin;