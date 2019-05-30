import { User } from './constants';

const Query = {
  getAllUser: () => User,
  getUser: (parent, { id }) => User.filter(data => data.id === id)[0],
}

export default Query;
