import { MessageSender } from '$features/messages/MessageSender';
import { SocketMessageTypes, type TStartGameRequest } from '@split-tetris/backend';

export const startGame = (params: TStartGameRequest) => {
  void MessageSender({
    id: '',
    type: SocketMessageTypes.START_GAME,
    body: params,
  });
};
