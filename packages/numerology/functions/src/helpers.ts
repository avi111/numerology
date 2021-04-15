import {db} from "./index";

const isAdmin = async (uid: string) => {
    const userData = await db.collection("userData").doc(uid).get();
    return userData && userData.exists && userData.data()?.hasOwnProperty("admin") && userData.data()?.admin;
}

export default isAdmin;