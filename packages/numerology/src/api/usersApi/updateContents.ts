import {services} from "../../firebase";

export interface IUpdateContents {
    category: string,
    contents: { [key: string]: string }
}
export const updateContents = (payload: IUpdateContents) => {
    try {
        return services.functions().httpsCallable('updateContents')(payload);
    } catch(e){
        console.log(e)
    }
}