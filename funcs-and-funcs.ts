export function printToFile(text: string,  callback: () => void): void {
    console.log(text);
    callback();
}

// can create types for this functionality
type MutationFunction = (v: number) => number;

// mutation function
// declare numbers array passed in and a function which returns a number
// then also declare the return type of this function as an array of numbers
export function arrayMutate(
    numbers: number[], 
    mutate: (v: number) => number
): number[] {
    return numbers.map(mutate)
}

// has the same functionality as above but uses the prebuilt type
export function arrayMutate2(
    numbers: number[], 
    mutate: MutationFunction
): number[] {
    return numbers.map(mutate)
}

console.log(arrayMutate([1,1,2,3,5], (v) => v*3));


// functions that return functions
export function createAdder(num: number) {
    return (val: number) => num + val;
}

// we capture a variable for a function essentially here
const addOne = createAdder(1);
// then apply another number by using the same function with 
// 1 attributed
console.log(addOne(5));