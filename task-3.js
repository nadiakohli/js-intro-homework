const users = [
  { id: 1, name: 'Alice', friends: [2, 3, 5] },
  { id: 2, name: 'Karol', friends: [1, 4, 6, 7] },
  { id: 3, name: 'John', friends: [4, 2, 5] },
  { id: 4, name: 'Max', friends: [5, 7, 9] },
  { id: 5, name: 'Alex', friends: [4, 8, 9, 1] },
  { id: 6, name: 'Lili', friends: [10, 7, 9, 2] },
  { id: 7, name: 'Mike', friends: [6, 4, 5] },
  { id: 8, name: 'Luke', friends: [10, 1, 3, 9] },
  { id: 9, name: 'Olaf', friends: [8, 4, 2, 7] },
  { id: 10, name: 'Mia', friends: [9, 3, 6, 4] },
];

const filterUsers = (arr, id) => arr.filter(({ friends }) => friends.includes(id));
console.log(filterUsers(users, 2));