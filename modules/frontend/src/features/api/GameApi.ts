import { MessageSender } from '$features/messages/MessageSender';
import { SocketMessageTypes, Subject } from '@split-tetris/backend';
import { v4 as uid } from 'uuid';
import type { TListGamesResponse, TStartGameRequest, TListGamesRequest, TJoinGameRequest } from '@split-tetris/backend';

export const startGame = (params: TStartGameRequest) => {
  void MessageSender({
    id: uid(),
    type: SocketMessageTypes.START_GAME,
    body: params,
  });
};

export const listGames = (params: TListGamesRequest) => {
  void MessageSender({
    id: uid(),
    type: SocketMessageTypes.LIST_GAMES,
    body: params,
  });
};

export const joinGame = (params: TJoinGameRequest) => {
  void MessageSender({
    id: uid(),
    type: SocketMessageTypes.JOIN_GAME,
    body: params,
  });
};
