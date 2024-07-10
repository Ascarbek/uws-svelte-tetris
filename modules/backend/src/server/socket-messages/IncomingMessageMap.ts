import { SocketMessageTypes, TSocketMessageRoute } from '@split-tetris/types';
import { NotAllowedPlug } from '../services/NotAllowedPlug.js';
import { signInRoute } from '../routes/sign-in-route.js';
import { signUpRoute } from '../routes/sign-up-route.js';

export const IncomingMessageMap: Record<SocketMessageTypes, TSocketMessageRoute> = {
  [SocketMessageTypes.SIGN_IN]: signInRoute,
  [SocketMessageTypes.SIGN_UP]: signUpRoute,
  [SocketMessageTypes.SIGN_OUT]: NotAllowedPlug,
  [SocketMessageTypes.RENAME_USER]: NotAllowedPlug,
  [SocketMessageTypes.START_GAME]: NotAllowedPlug,
  [SocketMessageTypes.USER_MOVE]: NotAllowedPlug,
  [SocketMessageTypes.EXIT_GAME]: NotAllowedPlug,
  [SocketMessageTypes.RENDER_BOARD]: NotAllowedPlug,
};
