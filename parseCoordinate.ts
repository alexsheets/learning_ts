// create interface to establish what a coordinate is
interface Coordinate {
    x: number;
    y: number;
}

function parseCoordFromObject(object: Coordinate): Coordinate {
    return {
        ...object
    }
}

function parseCoordFromNumbers(x: number, y: number): Coordinate {
    return {
        x,
        y
    }
}

// function overloading

function parseCoord(obj: Coordinate): Coordinate;
function parseCoord(x: number, y: number): Coordinate;

// unknown is basically any but has to be cast before using it
// similar to a 'safe' any
// using ? for a parameter means it could be null
function parseCoord(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0
    };

    if (typeof arg1 == 'object') {
        coord = {
            // as keyword to set type
            ...(arg1 as Coordinate)
        }
    } else {
        coord = {
            x: arg1 as number,
            y: arg2 as number
        }
    }
    return coord;
}

console.log(parseCoord(100, 2300));
console.log(parseCoord({x: 32, y: 72}));