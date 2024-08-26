import { TListGamesRequest, TListGamesResponse } from '../routes/list-games-shapes.js';
import { listSessions } from '../../cache/Session.js';

export const listGamesHandler: (params: TListGamesRequest) => TListGamesResponse = ({ jwt }) => {
  const items = listSessions();
  return {
    success: true,
    items,
  };
};
