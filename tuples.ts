type ThreeDCoordinate = [x: number, y: number, z: number];

function addCoordinate(c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2],
    ]
}

// tuples with different types
// use state returns state and state setter
function simpleStringState(initial: string): [() => string, (v: string) => void] {
    let str: string = initial;
    return [
        () => str,
        (v: string) => {
            str = v;
        }
    ]
}

const [str1getter, str1setter] = simpleStringState("hello");
console.log(str1getter());
str1setter("goodbye");
console.log(str1getter());