// define interface for db
interface Database<T, K> {
    get(id: K): T;
    set(id: K, value: T): void;
}

interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

// class InMemoryDatabase implements Database {
//     // db: Record<string, string> = {};
//     // private: only for this class
//     // protected: descendants may see
//     protected db: Record<string, string> = {};

//     get(id: string): string {
//         return this.db[id];
//     }
//     set(id: string, value: string): void {
//         this.db[id] = value;
//     }
// }

class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
    // db: Record<string, string> = {};
    // private: only for this class
    // protected: descendants may see
    protected db: Record<K, T> = {} as Record<K, T>;

    get(id: K): T {
        return this.db[id];
    }
    set(id: K, value: T): void {
        this.db[id] = value;
    }
}

// receives everything inmemoryDB does
class PersistentMemoryDb<T, K extends DBKeyType> extends InMemoryDatabase<T, K> implements Persistable {
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


const newDB = new PersistentMemoryDb<number, string>();
newDB.set("foo", 23);
console.log(newDB.get("foo"));
console.log(newDB.saveToString());


