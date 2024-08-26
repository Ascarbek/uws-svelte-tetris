import { SocketMessageTypes, TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { NotAllowedPlug } from '../services/NotAllowedPlug.js';
import { signInRoute } from '../routes/sign-in-route.js';
import { signUpRoute } from '../routes/sign-up-route.js';
import { startGameRoute } from '../routes/start-game-route.js';
import { joinGameRoute } from '../routes/join-game-route.js';

export const IncomingMessageMap: Record<SocketMessageTypes, TSocketMessageRoute> = {
  [SocketMessageTypes.SIGN_IN]: signInRoute,
  [SocketMessageTypes.SIGN_UP]: signUpRoute,
  [SocketMessageTypes.SIGN_OUT]: NotAllowedPlug,
  [SocketMessageTypes.RENAME_USER]: NotAllowedPlug,
  [SocketMessageTypes.START_GAME]: startGameRoute,
  [SocketMessageTypes.JOIN_GAME]: joinGameRoute,
  [SocketMessageTypes.USER_MOVE]: NotAllowedPlug,
  [SocketMessageTypes.EXIT_GAME]: NotAllowedPlug,
  [SocketMessageTypes.RENDER_BOARD]: NotAllowedPlug,
};
