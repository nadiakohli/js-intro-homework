const players = [
  { playerId: 1, score: 1 },
  { playerId: 2, score: 12 },
  { playerId: 3, score: 0 },
  { playerId: 4, score: 74 },
  { playerId: 5, score: 36 },
  { playerId: 6, score: 23 },
  { playerId: 7, score: 7 },
  { playerId: 8, score: 9 },
];

const filter = (arr, fn) => arr.reduce((acc, el) => fn(el) ? [...acc, el] : acc, []);

const filterByScore = ({ score }) => score > 10;
console.log(filter(players, filterByScore));