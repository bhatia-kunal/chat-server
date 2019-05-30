/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line prefer-const
let id = 2;
// eslint-disable-next-line import/no-mutable-exports
const User = [
  { id: 0, name: 'John Doe', friends: [1, 2], contact: 8587982297, email: 'johndoe@gmail.com' },
  { id: 1, name: 'Alice', friends: [0, 2], contact: 1234567890, email: 'alice@gmail.com' },
  { id: 2, name: 'Bob', friends: [0, 1], contact: 9876543210, email: 'bob@gmail.com' },
];

export {
  User,
  id,
};
