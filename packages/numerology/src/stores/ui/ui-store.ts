import GlobalView from "./global-view";
import {observable} from "mobx";

export default class UiStore {
    @observable globalView: GlobalView = {} as GlobalView;

    constructor() {
        this.globalView = new GlobalView();
    }
}
