function simpleState<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial;
    return [
        () => val,
        (v: T) => {
            val = v;
        }
    ]
}

const [str1g, str1s] = simpleState(10);
console.log(str1g());
str1s(6);
console.log(str1g());

// overriding inferred generic types
const [str2g, str2s] = simpleState<string | null>(null);

interface Rank<RankItem> {
    item: RankItem;
    rank: number;
}


function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
    
    const ranks: Rank<RankItem>[] = items.map((item) => ({
        item,
        rank: rank(item)
    }));

    ranks.sort((a,b) => a.rank - b.rank);

    return ranks.map((rank) => rank.item);
}


// use of ranker
interface Pokemon {
    name: string;
    hp: number;
}

const pokemon: Pokemon[] = [
    {
        name: "Pikachu",
        hp: 20
    },
    {
        name: "Charizard",
        hp: 30
    }
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);