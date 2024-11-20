// define interface for db
interface Database {
    get(id: string): string;
    set(id: string, value: string): void
}

interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void;
}

class InMemoryDatabase implements Database {
    // db: Record<string, string> = {};
    // private: only for this class
    // protected: descendants may see
    protected db: Record<string, string> = {};

    get(id: string): string {
        return this.db[id];
    }
    set(id: string, value: string): void {
        this.db[id] = value;
    }
}

// receives everything inmemoryDB does
class PersistentMemoryDb extends InMemoryDatabase implements Persistable {
    saveToString(): string {
        return JSON.stringify(this.db);
    }
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState);
    }
}


const myDB = new InMemoryDatabase();
myDB.set("foo", "bar");
// myDB.db["foo"] = "baz";      unaccessible once we have set db to pvt
console.log(myDB.get("foo"));


const newDB = new PersistentMemoryDb();
console.log(newDB.get("foo"));
console.log(newDB.saveToString());


