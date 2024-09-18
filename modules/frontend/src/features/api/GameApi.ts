import { MessageSender } from '$features/messages/MessageSender';
import { SocketMessageTypes, type TStartGameRequest } from '@split-tetris/backend';
import { v4 as uid } from 'uuid';

export const startGame = (params: TStartGameRequest) => {
  void MessageSender({
    id: uid(),
    type: SocketMessageTypes.START_GAME,
    body: params,
  });
};
