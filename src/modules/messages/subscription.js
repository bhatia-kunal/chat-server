import { pubsub, CHAT_CHANNEL } from '../../subscription';

const Subscription = {
  messageSent: {
    subscribe: () => pubsub.asyncIterator(CHAT_CHANNEL),
  },
};

export default Subscription;
