// cannot put another required value after optional ones
// the ? makes a value nullable
function printIngredient(quantity: string, ingredient: string, extra?: string) {
    console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""}`);
}

interface User {
    id: string,
    info?: {
        email?: string
    }
}

function getEmail(user: User): string {
    if (user.info) {
        return user.info.email!;
    }
    return "";
}

function getEmailEasy(user: User): string {
    // if empty, return null same as above
    return user?.info?.email ?? "";
}

// optional callbacks
function addWithCallback(x: number, y: number, callback: () => void) {
    console.log([x,y]);

    if (callback) {
        callback();
    }

    // or just use callback?.()
    // will only be invoked if the object exists
}