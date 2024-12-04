function createLoggerClass() {
    return class MyLoggerClass {
        private completeLog: string = "";
        log(str: string) {
            console.log(str);
            this.completeLog += str + "\n";
        }
        dumpLog() {
            return this.completeLog;
        }
    }
}

const myLogger = createLoggerClass();
const logger2 = new myLogger();


function CreateSimpleMemoryDatabase<T>() {
    return class SimpleMemoryDatabase {
        private db: Record<string, T> = {};

        set(id: string, value: T) {
            this.db[id] = value;
        }
        get(id: string): T {
            return this.db[id];
        }
        getObject(): object {
            return this.db;
        }

    }
}

const stringDB = CreateSimpleMemoryDatabase<string>();
const sdb1 = new stringDB;
sdb1.set("1", "apple");


type Constructor<T> = new (...args: any[]) => any;

// creating a mixin
function Dumpable<T extends Constructor<{getObject(): object;}>>(Base: T) {
    return class Dumpable extends Base {
        dump() {
            console.log(this.getObject());
        }
    }
}

const dumpableStrDb = Dumpable(stringDB);
const sdb2 = new dumpableStrDb;
sdb1.set("1", "apple");
sdb2.dump();