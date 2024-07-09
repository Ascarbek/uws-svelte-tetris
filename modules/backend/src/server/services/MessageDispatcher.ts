import { SocketMessageTypes, TDispatchItem } from '@split-tetris/types';
import { SendMessage } from '../socket/SendMessage.js';

export const Dispatch: (data: TDispatchItem, socket_id: string, message_id: string) => void = (
  data,
  socket_id,
  message_id
) => {
  switch (data.type) {
    case SocketMessageTypes.RENDER_BOARD:
      SendMessage({ message_type: SocketMessageTypes.RENDER_BOARD, socket_id, message_id, request: data });

      break;
  }
};
