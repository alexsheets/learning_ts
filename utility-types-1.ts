interface MyUser {
    name: string;
    id: string;
    email?: string;
    phone?: string;
}

// allows us to create a new type using an interface and add to it
type MyUserOptionals = Partial<MyUser>;

// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides
    }
}

// will track any changes we make to myuser
type RequiredMyUser = Required<MyUser>;

// pick certain aspects of interface
type JustEmailAndName = Pick<MyUser, "email" | "name">


const mapById = (users: MyUser[]): Record<string, MyUser> => {
    // accumulator and record
    return users.reduce((a, v) => {
        return {
            ...a,
            [v.id]: v,
        }
    }, {} );
}

const mapByIdOmit = (users: MyUser[]): Record<string, Omit<MyUser, "id">> => {
    // accumulator and record
    return users.reduce((a, v) => {
        const { id, ...other } = v;
        return {
            ...a,
            [v.id]: v,
        }
    }, {} );
}