import { v4 as uid } from 'uuid';
import { TStartGameRequest } from '../routes/start-game-shapes.js';
import { TCommonResponse } from '../../shapes/Common.js';
import { TGameSession } from '../../shapes/GameSessionShape.js';
import { checkAccessToken } from '../../app/user/checkAccessToken.js';
import { getUserById } from '../../database/getUserById.js';
import { COL_COUNT, ROW_COUNT } from '../../shapes/LevelShapes.js';
import { addNewSession } from '../../cache/Session.js';

export const startGameHandler: (params: TStartGameRequest) => Promise<TCommonResponse> = async ({ jwt }) => {
  const userId = checkAccessToken(jwt);

  if (!userId) {
    return {
      success: false,
      error: 'startGameHandler: incorrect or expired access token',
    };
  }

  const getUserResp = await getUserById({ id: userId });
  if (!getUserResp.success) {
    return getUserResp;
  }
  const user = getUserResp.data;

  const session: TGameSession = {
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

  return {
    success: false,
    error: 'not implemented',
  };
};
