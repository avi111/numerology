import UsersStore from "./users/users-store";
import {observable} from "mobx";

export default class DataStore {
    @observable usersStore: UsersStore;

    constructor() {
        this.usersStore = new UsersStore();
    }
}
