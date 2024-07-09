import { WebSocket } from 'uWebSockets.js';
import { LogMessage } from '../services/Logger.js';
import { removeSocket } from './CurrentSocket.js';

export const CloseConnection = (ws: WebSocket<{ socket_id: string }>, code: number, message: ArrayBuffer) => {
  removeSocket(ws.getUserData().socket_id);
  LogMessage('closing connection: ', ws.getUserData());
};
