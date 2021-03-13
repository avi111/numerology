import UsersStore from "./users/users-store";

export default class DataStore {
    usersStore: UsersStore;

    constructor() {
        this.usersStore = new UsersStore();
    }
}
