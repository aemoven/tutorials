const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = [
    "raindrops on roses",
    "whiskers on kittens",
    "bright copper kettles",
    "warm woolen mittens",
];
const voters = [
    { name: "Alice", age: 42 },
    { name: "Bob", age: 77 },
];

function getLastItem<T>(array: T[]): T | undefined {
    return array[array.length - 1];
}

const lastItemGameScores = getLastItem(gameScores);
const lastItemFavoriteThings = getLastItem(favoriteThings);
const lastItemVoters = getLastItem(voters);

console.log(lastItemGameScores);
console.log(lastItemFavoriteThings);
console.log(lastItemVoters);
