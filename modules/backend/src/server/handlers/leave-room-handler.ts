import { TLeaveRoomRequest } from '../routes/leave-room-shapes.js';
import { TCommonResponse } from '../../shapes/Common.js';
import { getSessionById, removeSession } from '../../cache/Session.js';
import { checkAccessToken } from '../../app/user/checkAccessToken.js';

export const leaveRoomHandler: (params: TLeaveRoomRequest) => Promise<TCommonResponse> = async ({ jwt, sessionId }) => {
  const session = getSessionById(sessionId);
  if (!session) {
    return {
      success: false,
      error: 'leaveRoomHandler: game session not found',
    };
  }
  const userId = checkAccessToken(jwt);
  if (!userId) {
    return {
      success: false,
      error: 'leaveRoomHandler: incorrect or expired access token',
    };
  }
  removeSession(sessionId);
  return {
    success: true,
  };
};
