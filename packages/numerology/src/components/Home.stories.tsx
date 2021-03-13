import React from 'react';
import {Meta} from '@storybook/react';
import Home from "./Home";
import {Views} from "../stores/ui/global-view";
import MobxHelper from "../stories/mobxHelper";
import rootStore from "../stories/initStore";

export default {
    title: 'Pages/Home',
    component: Home
} as Meta;


const Template = (args: { loggedIn: any; }) => {
    rootStore.uiStores.globalView.currentView = args.loggedIn ? Views.LoggedIn : Views.LoggedOut;

    return (
        <MobxHelper {...{rootStore}}>
            <Home/>
        </MobxHelper>
    );
}

export const LoggedIn = Template.bind({});
// @ts-ignore
LoggedIn.args = {
    loggedIn: true
}

export const LoggedOut = Template.bind({});
// @ts-ignore
LoggedOut.args = {
    loggedIn: false
}