import { TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { listGamesRequestShape, listGamesResponseShape } from './list-games-shapes.js';
import { listGamesHandler } from '../handlers/list-games-handler.js';

export const listGamesRoute: TSocketMessageRoute = {
  input: listGamesRequestShape,
  output: listGamesResponseShape,
  handler: listGamesHandler,
};
