import {StoreProvider} from "../stores/helpers/store-context";
import React from "react";
import RootStore from "../stores/root-store";

const MobxHelper = ({children, rootStore}: {children: any, rootStore: RootStore}) => {
    return (
        <StoreProvider value={rootStore}>
            {children}
        </StoreProvider>
    );
}

export default MobxHelper;