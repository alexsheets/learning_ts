let userName: string = "alex";
let hasLoggedIn: boolean = true;

userName += " Sheets";

console.log(userName);

// types
let num: number = 12;
let regex: RegExp = /foo/;

// splitting and declaring arrays
const names: string[] = userName.split(" ")

// generic type for arrays
// can also do tuples of say int and string
const myVals: Array<number> = [1, 1, 2, 3, 5];

// define an interface and reuse it
interface Person {
    first: string;
    last: string;
}

// objects
const myP: Person = {
    first: "Jack",
    last: "Sparrow"
}

// object as map
const ids = {
    10: "a",
    20: "b"
}

// use a utility type called Record to define
// key and value type
const _ids: Record<number, string> = {
    10: "a",
    20: "b"
}
_ids[30] = "c";


// conditionals/expr
if (_ids[30] == 'd') {

}

// loops
for (let i=0;i<10;i++) {
    console.log[i];
}

[1,1,2,3,5].forEach((v) => console.log(v));
const out = [4,5,6].map((v) => v*10);