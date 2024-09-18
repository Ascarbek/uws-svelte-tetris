import { TJoinRoomRequest } from '../routes/join-room-shapes.js';
import { TCommonResponse } from '../../shapes/Common.js';
import { getSessionById, updateSession } from '../../cache/Session.js';
import { getUsernameById } from '../../database/user/getUsernameById.js';
import { checkAccessToken } from '../../app/user/checkAccessToken.js';

export const joinRoomHandler: (params: TJoinRoomRequest) => Promise<TCommonResponse> = async ({ jwt, sessionId }) => {
  const session = getSessionById(sessionId);
  if (!session) {
    return {
      success: false,
      error: 'joinGameHandler: game session not found',
    };
  }
  const userId = checkAccessToken(jwt);
  if (!userId) {
    return {
      success: false,
      error: 'joinGameHandler: incorrect or expired access token',
    };
  }
  const getUserResp = await getUsernameById({ id: userId });
  if (!getUserResp.success) {
    return getUserResp;
  }
  const { username: currentUsername } = getUserResp.data;

  session.guests = [
    ...session.guests,
    {
      id: userId,
      username: currentUsername,
    },
  ];

  updateSession(session);

  return {
    success: true,
  };
};
