import GlobalView from "./global-view";

export default class UiStore {
    globalView: GlobalView = {} as GlobalView;

    constructor() {
        this.globalView = new GlobalView();
    }
}
