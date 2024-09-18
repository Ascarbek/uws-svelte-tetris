import { v4 as uid } from 'uuid';
import { TCreateRoomRequest } from '../routes/create-room-shapes.js';
import { TCommonResponse } from '../../shapes/Common.js';
import { TRoom } from '../../shapes/RoomShapes.js';
import { checkAccessToken } from '../../app/user/checkAccessToken.js';
import { getUsernameById } from '../../database/user/getUsernameById.js';
import { COL_COUNT, ROW_COUNT } from '../../shapes/LevelShapes.js';
import { addNewSession, listSessions } from '../../cache/Session.js';
import { TDispatch } from '../../shapes/DispatchItems.js';
import { SocketMessageTypes } from '../../shapes/SocketMessageShapes.js';

export const createRoomHandler: (params: TCreateRoomRequest, dispatch: TDispatch) => Promise<TCommonResponse> = async (
  { jwt },
  dispatch
) => {
  const userId = checkAccessToken(jwt);

  if (!userId) {
    return {
      success: false,
      error: 'startGameHandler: incorrect or expired access token',
    };
  }

  const getUserResp = await getUsernameById({ id: userId });
  if (!getUserResp.success) {
    return getUserResp;
  }
  const user = getUserResp.data;

  const session: TRoom = {
    id: uid(),
    created: new Date().getTime(),
    host: {
      id: userId,
      username: user.username,
    },
    guests: [],
    cells: [...new Array(ROW_COUNT * COL_COUNT)].map((_) => 0),
  };

  addNewSession(session);
  dispatch({
    type: SocketMessageTypes.LIST_ROOMS,
    body: {
      success: true,
      items: listSessions(),
    },
  });

  return {
    success: false,
    error: 'not implemented',
  };
};
