import { messageBroker } from '../services/MessageBroker.js';
import { WebSocket } from 'uWebSockets.js';
import { LogError } from '../services/Logger.js';

export const ReceiveMessage: (
  ws: WebSocket<{ socket_id: string }>,
  message: ArrayBuffer,
  isBinary: boolean
) => void | Promise<void> = async (ws, messageBin, isBinary) => {
  const decoder = new TextDecoder('utf8');
  const messageString = decoder.decode(messageBin);

  let messageJson = {};
  try {
    messageJson = JSON.parse(messageString);
  } catch (e) {
    return LogError('error parsing text to json ', e);
  }

  const socket_id = ws.getUserData().socket_id;

  const response = await messageBroker(messageJson, socket_id);
  if (response === null) {
    return;
  }
  try {
    ws.send(JSON.stringify(response));
  } catch (e) {
    LogError('ReceiveMessage: problem on sending data to client!');
    console.error(e);
  }
};
