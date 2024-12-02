// using abstract, we can use this like a template
// never instantiate street fighter directly
abstract class StreetFighter {
    constructor() {

    }

    move() {}
    fight() {
        console.log(`${this.name} attack with ${this.getSpecialAttack()}`)
    }

    abstract getSpecialAttack(): string;
    abstract get name: string;
}

class Ryu extends StreetFighter {
    getSpecialAttack(): string {
        return "Hadouken";
    }
    get name(): string {
        return "Ryu";
    }
}


const ryu = new StreetFighter();
console.log(ryu.getSpecialAttack()); 