import { Groups, id } from './constant';
import { User } from '../user/constants';
import { pubsub, GROUP_CREATED } from '../../subscription';

const Mutation = {
  addGroup: (parent, { name, members }) => {
    const temp = {
      id: id + 1,
      name,
      members: User.filter(data => members.indexOf(data.id) !== -1).map(user => user.id),
    };
    Groups.push(temp);
    pubsub.publish(GROUP_CREATED, { groupAdded: temp });
    return temp;
  },
}

export default Mutation;
