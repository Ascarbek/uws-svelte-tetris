import { SocketMessageTypes, TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { NotAllowedPlug } from '../services/NotAllowedPlug.js';
import { signInRoute } from '../routes/sign-in-route.js';
import { signUpRoute } from '../routes/sign-up-route.js';
import { createRoomRoute } from '../routes/create-room-route.js';
import { joinGameRoute } from '../routes/join-game-route.js';
import { listRoomsRoute } from '../routes/list-rooms-route.js';

export const IncomingMessageMap: Record<SocketMessageTypes, TSocketMessageRoute> = {
  [SocketMessageTypes.SIGN_IN]: signInRoute,
  [SocketMessageTypes.SIGN_UP]: signUpRoute,
  [SocketMessageTypes.SIGN_OUT]: NotAllowedPlug,
  [SocketMessageTypes.RENAME_USER]: NotAllowedPlug,
  [SocketMessageTypes.LIST_ROOMS]: listRoomsRoute,
  [SocketMessageTypes.CREATE_ROOM]: createRoomRoute,
  [SocketMessageTypes.JOIN_ROOM]: joinGameRoute,
  [SocketMessageTypes.USER_MOVE]: NotAllowedPlug,
  [SocketMessageTypes.EXIT_GAME]: NotAllowedPlug,
  [SocketMessageTypes.RENDER_BOARD]: NotAllowedPlug,
};

export const IncomingMessageNames: Record<SocketMessageTypes, string> = {
  [SocketMessageTypes.SIGN_IN]: 'Sign In',
  [SocketMessageTypes.SIGN_UP]: 'Sign Up',
  [SocketMessageTypes.SIGN_OUT]: 'Sign Out',
  [SocketMessageTypes.RENAME_USER]: 'Rename User',
  [SocketMessageTypes.LIST_ROOMS]: 'List Rooms',
  [SocketMessageTypes.CREATE_ROOM]: 'Start Game',
  [SocketMessageTypes.JOIN_ROOM]: 'Join Game',
  [SocketMessageTypes.USER_MOVE]: 'User Move',
  [SocketMessageTypes.EXIT_GAME]: 'Exit Game',
  [SocketMessageTypes.RENDER_BOARD]: 'Render Board',
};
