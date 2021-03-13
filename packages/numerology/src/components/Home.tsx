import React from "react";
import {Views} from "../stores/ui/global-view";
import {useStores} from "../stores/helpers/use-stores";
import {observer} from "mobx-react-lite";

const Home = observer(() => {
    const {uiStores: {globalView}} = useStores();

    return (
        <React.Fragment>
            {globalView.currentView === Views.LoggedOut ? "logged out" : "logged in"}
        </React.Fragment>
    );
});

export default Home;