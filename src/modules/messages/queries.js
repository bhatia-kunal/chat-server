import { Messages } from './constant';

const Query = {
  getAllMessages: () => Messages,
  getMessage: (parent, { text }) => Messages.filter(data => data.text === text)[0],
}

export default Query;
