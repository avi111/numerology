import {services} from "../../firebase";
import {userDetailsPayload} from "../../components/FormComponents/UserDetails/interface";

export const updateUserData = (payload: userDetailsPayload) => {
    try {
        return services.functions().httpsCallable('updateUserData')(payload);
    } catch(e){
        console.log(e)
    }
}