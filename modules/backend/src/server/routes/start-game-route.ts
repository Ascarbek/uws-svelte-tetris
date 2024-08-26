import { TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { startGameRequestShape } from './start-game-shapes.js';
import { commonResponseShape } from '../../shapes/Common.js';
import { startGameHandler } from '../handlers/start-game-handler.js';

export const startGameRoute: TSocketMessageRoute = {
  input: startGameRequestShape,
  output: commonResponseShape,
  handler: startGameHandler,
};
