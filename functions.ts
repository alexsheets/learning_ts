// the definition of the return type comes at the top of
// function declaration, after the declaration of vars and types
function addNumbers(a: number, b: number): number {
    return a + b;
}

// sets a default export from this module
export default addNumbers;


// const functions
// can set default values for variables like str2: string = ""
export const addStrings = (str1: string, str2: string): string => 
    `${str1} ${str2}`;


// union typing: in this case, we accept a param that is string or num
export const format = (title: string, param: string | number): string =>
    `${title} ${param}`;


export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
}


// function that returns a promise
export const fetchData = (url: string): Promise<string> => Promise.resolve('data');

// rest parameters
function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(" ")}`;
}


// typescript ONLY enforces types at COMPILE time, NOT at RUNTIME
// if you are going to interface your TS code with JS code
// make sure these interface points are where we put in type safety
// in types and helper functions