class Doggy {
    // stores name and age and makes them public
    constructor(public readonly name: string, public readonly age: number) {

    }
}

const lg = new Doggy("LG", 13);
console.log(lg.name);


class DogList {
    private dogs: Doggy[] = [];

    static instance: DogList = new DogList();

    // can never create new dog list, only access this one instance
    private constructor() {}

    static addDog(dog: Doggy) {
        DogList.instance.dogs.push(dog);
    }

    getDogs() {
        return this.dogs;
    }
}

// static so can be declared as an instance
DogList.instance;

const dl = new DogList();
