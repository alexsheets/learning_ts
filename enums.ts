enum LoadingState {
    beforeLoad = "beforeLoad",
    loading = "loading",
    loaded = "loaded"
}

const isLoading = (state: string) => state == LoadingState.loading;


console.log(isLoading(LoadingState.beforeLoad));


const englishLoadingStates = {
    [LoadingState.beforeLoad]: "Before Load"
}


// literal types
function rollDice(dice: number): number {
    let pip = 0;
    for(let i=0; i<dice; i++) {
        pip += Math.floor((Math.random()*5) +1)
    }
    return pip;
}

console.log(rollDice(4));

// numeric literal
// only allows 1, 2 or 3
function rollDiceLit(dice: 1 | 2 | 3): number {
    let pip = 0;
    for(let i=0; i<dice; i++) {
        pip += Math.floor((Math.random()*5) +1)
    }
    return pip;
}


// string literals
// functional overloading
function sendEvent(name: "addToCart", data: {productID: number;}): void 
function sendEvent(name: "checkout", data: {cartCount:number; }): void;


function sendEvent(name: string, data: unknown): void {
    console.log(`${name}: {JSON.stringify(data)}`)
}

sendEvent("addToCart", {productID: 123});