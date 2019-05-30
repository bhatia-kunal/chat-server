import { PubSub } from 'apollo-server';

export const pubsub = new PubSub();

export const USER_ADDED = 'USER_ADDED';
export const GROUP_CREATED = 'GROUP_CREATED';
export const CHAT_CHANNEL = 'CHAT_CHANNEL';
