import { User } from './modules/user/constants';

const nestedQuery = {
  User: {
    friends: parent => User.filter(data => parent.friends.indexOf(data.id) !== -1),
  },
  Group: {
    members: parent => User.filter(user => parent.members.indexOf(user.id) !== -1),
  },
};

export default nestedQuery;
