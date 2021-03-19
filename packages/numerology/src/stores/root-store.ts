import DataStore from "./data/data-store";
import UiStore from "./ui/ui-store";
import {observable} from "mobx";

export default class RootStore {
    private static instance: RootStore;
    @observable dataStores: DataStore = new DataStore() as DataStore;
    @observable uiStores: UiStore = new UiStore() as UiStore;

    static getInstance() {
        if (!RootStore.instance) {
            RootStore.instance = new RootStore();
        }

        return RootStore.instance;
    }
}
