import { TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { joinGameRequestShape } from './join-game-shapes.js';
import { commonResponseShape } from '../../shapes/Common.js';
import { joinGameHandler } from '../handlers/join-game-handler.js';

export const joinGameRoute: TSocketMessageRoute = {
  input: joinGameRequestShape,
  output: commonResponseShape,
  handler: joinGameHandler,
};
