import { TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { createRoomRequestShape } from './create-room-shapes.js';
import { commonResponseShape } from '../../shapes/Common.js';
import { createRoomHandler } from '../handlers/create-room-handler.js';

export const createRoomRoute: TSocketMessageRoute = {
  input: createRoomRequestShape,
  output: commonResponseShape,
  handler: createRoomHandler,
};
