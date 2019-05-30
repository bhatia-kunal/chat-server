import { Groups } from './constant';

const Query = {
  getAllGroups: () => Groups,
  getGroup: (parent, { id }) => Groups.filter(data => data.id === id)[0],
}

export default Query;
