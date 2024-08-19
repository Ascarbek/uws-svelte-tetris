import type { TSocketMessage } from '@split-tetris/backend';
import { MessageQueue } from '$stores/Message';

export const MessageSender = async (message: TSocketMessage) => {
  MessageQueue.update((queue) => {
    return [...queue, message];
  });
};
