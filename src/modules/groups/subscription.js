import { pubsub, GROUP_CREATED } from '../../subscription';

const Subscription = {
  groupAdded: {
    subscribe: () => pubsub.asyncIterator(GROUP_CREATED),
  },
};

export default Subscription;
