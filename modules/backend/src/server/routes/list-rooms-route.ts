import { TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { listRoomsRequestShape, listRoomsResponseShape } from './list-rooms-shapes.js';
import { listRoomsHandler } from '../handlers/list-rooms-handler.js';

export const listRoomsRoute: TSocketMessageRoute = {
  input: listRoomsRequestShape,
  output: listRoomsResponseShape,
  handler: listRoomsHandler,
};
