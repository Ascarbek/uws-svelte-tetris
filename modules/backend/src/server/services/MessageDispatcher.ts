import { SocketMessageTypes } from '../../shapes/SocketMessageShapes.js';
import { TDispatchItem } from '../../shapes/DispatchItems.js';
import { SendMessage } from '../socket/SendMessage.js';

export const Dispatch: (data: TDispatchItem, socket_id: string, message_id: string) => void = (
  data,
  socket_id,
  message_id
) => {
  switch (data.type) {
    case SocketMessageTypes.RENDER_BOARD:
      SendMessage({ message_type: SocketMessageTypes.RENDER_BOARD, socket_id, message_id, request: data.body });
      break;
    case SocketMessageTypes.LIST_ROOMS:
      SendMessage({ message_type: SocketMessageTypes.LIST_ROOMS, socket_id, message_id, request: data.body });
      break;
  }
};
