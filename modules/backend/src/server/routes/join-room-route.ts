import { TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { joinRoomRequestShape } from './join-room-shapes.js';
import { commonResponseShape } from '../../shapes/Common.js';
import { joinRoomHandler } from '../handlers/join-room-handler.js';

export const joinRoomRoute: TSocketMessageRoute = {
  input: joinRoomRequestShape,
  output: commonResponseShape,
  handler: joinRoomHandler,
};
