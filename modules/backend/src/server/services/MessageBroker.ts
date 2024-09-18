import { socketMessageShape, TSocketMessage } from '../../shapes/SocketMessageShapes.js';
import { IncomingMessageMap, IncomingMessageNames } from '../socket-messages/IncomingMessageMap.js';
import { processMessage } from './ProcessMessage.js';
import { LogError, LogMessage } from './Logger.js';

export const messageBroker = async (raw: any, socket_id: string): Promise<TSocketMessage | null> => {
  const msgParsed = socketMessageShape.safeParse(raw);
  if (!msgParsed.success) {
    LogError('error parsing message: ', msgParsed.error);
    return null;
  }

  const msg = msgParsed.data;
  const messageType = msg.type;
  const messageBody = msg.body;
  const message_id = msg.id;

  const name = IncomingMessageNames[messageType];
  LogMessage(`message received: ${name}`);

  const route = IncomingMessageMap[messageType];
  if (route === null) return null;

  const result = await processMessage(socket_id, message_id, messageBody, route.input, route.output, route.handler);

  return {
    id: message_id,
    type: messageType,
    body: result,
  };
};
