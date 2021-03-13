import React from 'react';
import {Meta} from '@storybook/react';
import SimpleBottomNavigation from './SimpleBottomNavigation';
import {Views} from "../../stores/ui/global-view";
import MobxHelper from "../../stories/mobxHelper";
import RouterHelper from "../../stories/RouterHelper";
import rootStore from "../../stories/initStore";

export default {
    title: 'Header/SimpleBottomNavigation',
    component: SimpleBottomNavigation
} as Meta;

const Template = (args: { loggedIn: any; }) => {
    rootStore.uiStores.globalView.currentView = args.loggedIn ? Views.LoggedIn : Views.LoggedOut;
    return (
        <MobxHelper {...{rootStore}}>
            <RouterHelper>
                <SimpleBottomNavigation/>
            </RouterHelper>
        </MobxHelper>
    )
};

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