const currentUser = {
  firstName: 'Archie',
  isMale: true,
  age: 22,
  address: {
    zip: 79000,
    city: 'Lviv',
    state: 'Ukraine',
  },
  sayHello: () => 'Hello!',
};

const copyObject = (input) => {
  if (typeof input !== 'object') {
    return input;
  };

  const copy = {};
  for (key in input) {
    copy[key] = copyObject(input[key]);
  }
  return copy;
};

const newUser = copyObject(currentUser);
console.log(newUser);