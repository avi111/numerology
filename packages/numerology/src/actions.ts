import {actionNames} from "./consts/actions";
import RemoteContent from "./models/remoteContent/remoteContent";

// @ts-ignore
import alertify from 'alertifyjs';
import {IAppContext} from "./contexts/AppContext";
import {ILanguageContext} from "./contexts/LanguageContext";
import {IUserContext} from "./contexts/UserContext";
import {PrepareDoc, Strategy} from "@maya259/numerology-export";

export const actions = ({
                            appContext,
                            langContext,
                            userContext
                        }: {
    appContext: IAppContext,
    langContext: ILanguageContext,
    userContext: IUserContext
}) => {

    return {
        [actionNames.SYNC_CONTENTS]: async () => {
            const savedContents = new RemoteContent({category: undefined, user: userContext.user})
            appContext.setMounted({state: false, msg: "syncing contents"});
            const reset = await savedContents.reset()
            reset && alertify.success(langContext.getWord("contents were refreshed"))
            appContext.setMounted({state: true});
        },
        [actionNames.EXPORT]: () => {
            if (appContext.lastResult?.result) {
                PrepareDoc.prepare(appContext.lastResult.result, Strategy.PROFILE);
            }
        }
    }
}