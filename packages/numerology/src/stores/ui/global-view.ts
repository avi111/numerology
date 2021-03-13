import {action, observable} from "mobx";

export enum Views {
    LoggedOut = 'LoggedOut',
    LoggedIn = 'LoggedIn'
}

export default class GlobalView {
    @observable
    currentView: Views = Views.LoggedOut;

    @action
    updateView(view: Views) {
        this.currentView = view;
    }
}
