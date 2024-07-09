import { LogMessage } from '../services/Logger.js';
import { WebSocket } from 'uWebSockets.js';
import { addSocket } from './CurrentSocket.js';

export const OpenConnection = (ws: WebSocket<{ socket_id: string }>) => {
  const id = addSocket(ws);
  LogMessage('opening connection: ', id);
};
