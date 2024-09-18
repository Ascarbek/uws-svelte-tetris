import { SocketMessageTypes, TSocketMessage } from '../../shapes/SocketMessageShapes.js';
import { v4 as uid } from 'uuid';
import { SocketServer } from '../server.js';

export const PublishMessage: (params: { message_type: SocketMessageTypes; request: any }) => void = ({
  message_type,
  request,
}) => {
  const message: TSocketMessage = {
    id: uid(),
    type: message_type,
    body: request,
  };
  SocketServer.publish('some/public/topic', JSON.stringify(message));
};
