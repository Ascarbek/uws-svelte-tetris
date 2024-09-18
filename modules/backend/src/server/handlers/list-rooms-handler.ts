import { TListRoomsRequest, TListRoomsResponse } from '../routes/list-rooms-shapes.js';
import { listSessions } from '../../cache/Session.js';

export const listRoomsHandler: (params: TListRoomsRequest) => TListRoomsResponse = ({ jwt }) => {
  const items = listSessions();
  return {
    success: true,
    items,
  };
};
