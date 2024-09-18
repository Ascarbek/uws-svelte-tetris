import { TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { leaveRoomRequestShape } from './leave-room-shapes.js';
import { commonResponseShape } from '../../shapes/Common.js';
import { leaveRoomHandler } from '../handlers/leave-room-handler.js';

export const leaveRoomRoute: TSocketMessageRoute = {
  input: leaveRoomRequestShape,
  output: commonResponseShape,
  handler: leaveRoomHandler,
};
