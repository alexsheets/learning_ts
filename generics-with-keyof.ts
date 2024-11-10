function pluck<DataType, KeyType extends keyof DataType>(
    items: DataType[], 
    key: KeyType
): DataType[KeyType][] {
    return items.map((item) => item[key]);
}

const cats = [
    {name: "Violet", age: 6},
    {name: "Blackberry", age: 20}
]


console.log(pluck(cats, "age"))
console.log(pluck(cats, "name"))


interface BaseEvent {
    time: number;
    user: string;
}

interface EventMap {
    // adding types
    addToCart: BaseEvent & { quantity: number; productID: string; },
    checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name: string, data: EventMap[Name]): void {
    console.log([name, data])
}

sendEvent("addToCart", {productID: 'foo', user: 'bar', quantity: 1, time: 10});
