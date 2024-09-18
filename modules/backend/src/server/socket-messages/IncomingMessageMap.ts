import { SocketMessageTypes, TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { NotAllowedPlug } from '../services/NotAllowedPlug.js';
import { signInRoute } from '../routes/sign-in-route.js';
import { signUpRoute } from '../routes/sign-up-route.js';
import { startGameRoute } from '../routes/start-game-route.js';
import { joinGameRoute } from '../routes/join-game-route.js';
import { listGamesRoute } from '../routes/list-games-route.js';

export const IncomingMessageMap: Record<SocketMessageTypes, TSocketMessageRoute> = {
  [SocketMessageTypes.SIGN_IN]: signInRoute,
  [SocketMessageTypes.SIGN_UP]: signUpRoute,
  [SocketMessageTypes.SIGN_OUT]: NotAllowedPlug,
  [SocketMessageTypes.RENAME_USER]: NotAllowedPlug,
  [SocketMessageTypes.LIST_GAMES]: listGamesRoute,
  [SocketMessageTypes.START_GAME]: startGameRoute,
  [SocketMessageTypes.JOIN_GAME]: joinGameRoute,
  [SocketMessageTypes.USER_MOVE]: NotAllowedPlug,
  [SocketMessageTypes.EXIT_GAME]: NotAllowedPlug,
  [SocketMessageTypes.RENDER_BOARD]: NotAllowedPlug,
};

export const IncomingMessageNames: Record<SocketMessageTypes, string> = {
  [SocketMessageTypes.SIGN_IN]: 'Sign In',
  [SocketMessageTypes.SIGN_UP]: 'Sign Up',
  [SocketMessageTypes.SIGN_OUT]: 'Sign Out',
  [SocketMessageTypes.RENAME_USER]: 'Rename User',
  [SocketMessageTypes.LIST_GAMES]: 'List Games',
  [SocketMessageTypes.START_GAME]: 'Start Game',
  [SocketMessageTypes.JOIN_GAME]: 'Join Game',
  [SocketMessageTypes.USER_MOVE]: 'User Move',
  [SocketMessageTypes.EXIT_GAME]: 'Exit Game',
  [SocketMessageTypes.RENDER_BOARD]: 'Render Board',
};
