import { Messages } from './constant';
import { pubsub, CHAT_CHANNEL } from '../../subscription';

const Mutation = {
    sendMessage: (root, { to, from, text }) => {
        const chat = { to, from, text };
        Messages.push(chat);
        pubsub.publish(CHAT_CHANNEL, { messageSent: chat });
        return chat;
    },
}

export default Mutation;
