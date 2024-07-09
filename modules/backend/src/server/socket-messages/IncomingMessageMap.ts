import { SocketMessageTypes, TSocketMessageRoute } from '@split-tetris/types';
import { NotAllowedPlug } from '../services/NotAllowedPlug.js';
import { signInRoute } from '../routes/sign-in-route.js';

export const IncomingMessageMap: Record<SocketMessageTypes, TSocketMessageRoute> = {
  [SocketMessageTypes.SIGN_IN]: signInRoute,
  [SocketMessageTypes.SIGN_UP]: NotAllowedPlug,
  [SocketMessageTypes.SIGN_OUT]: NotAllowedPlug,
  [SocketMessageTypes.RENDER_BOARD]: NotAllowedPlug,
};
