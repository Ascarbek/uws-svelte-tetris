import { MessageBroker } from './MessageHandlerMap';

export const MessageReceiver = (messageString: string) => {
  let messageJson: any = {};
  try {
    messageJson = JSON.parse(messageString);
  } catch (e) {
    console.error('error parsing received text message');
    return;
    // mute
  }
  MessageBroker(messageJson);
};
