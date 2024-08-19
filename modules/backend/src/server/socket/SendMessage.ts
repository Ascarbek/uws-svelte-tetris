import { getSocketById } from './CurrentSocket.js';
import { SocketMessageTypes, TSocketMessage } from '../../lib/SocketMessageShapes.js';

export const SendMessage: (params: {
  message_type: SocketMessageTypes;
  socket_id: string;
  message_id: string;
  request: any;
}) => void = ({ message_type, socket_id, message_id, request }) => {
  const message: TSocketMessage = {
    id: message_id,
    type: message_type,
    body: request,
  };
  getSocketById(socket_id)?.send(JSON.stringify(message));
};
