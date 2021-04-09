class IndexedDB {
    db: any;
    openRequest: any;
    name: string;

    constructor(name: string) {
        this.name = name;
        this.openRequest = indexedDB.open(this.name, 1);

        const self = this;
        this.openRequest.onupgradeneeded = function () {
            self.init()
        };

        this.openRequest.onerror = function () {
            console.error("Error", self.openRequest.error);
        };

        this.openRequest.onsuccess = function () {
            self.db = self.openRequest.result;
            // continue working with database using db object
        };
    }

    init() {
        const db = this.openRequest.result;
        const store = db.createObjectStore("books", {keyPath: "isbn"});
        store.createIndex("by_title", "title", {unique: true});
        store.put({title: "Quarry Memories", author: "Fred", isbn: 123456});
        store.put({title: "Water Buffaloes", author: "Fred", isbn: 234567});
        store.put({title: "Bedrock Nights", author: "Barney", isbn: 345678});
    }

    async getContent(name: string, key: string) {
        const openRequest = indexedDB.open(name, 1);
        const db = openRequest.result;
        return await new Promise(resolve => {
            console.log(db)
            db.transaction("books").objectStore("books").index("by_title").get(key).addEventListener("success", function (event: any) {
                resolve(event.target.result)
            });
        })

    }
}

export default IndexedDB