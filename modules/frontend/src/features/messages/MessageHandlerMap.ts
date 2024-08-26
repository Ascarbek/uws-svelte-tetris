import type {
  ISubject,
  TSocketMessage,
  TSignInResponse,
  TCommonResponse,
  TRenderBoardRequest,
} from '@split-tetris/backend';
import { SocketMessageTypes, Subject } from '@split-tetris/backend';

export const SignUpSubject = new Subject<TCommonResponse>();
export const SignInSubject = new Subject<TSignInResponse>();
export const SignOutSubject = new Subject<TCommonResponse>();
export const RenderBoardSubject = new Subject<TRenderBoardRequest>();
export const StartGameSubject = new Subject<TCommonResponse>();
export const JoinGameSubject = new Subject<TCommonResponse>();
export const ExitGameSubject = new Subject<TCommonResponse>();
export const RenameUserSubject = new Subject<TCommonResponse>();
export const UserMoveSubject = new Subject<TCommonResponse>();

const MessageHandlerMap: Record<SocketMessageTypes, ISubject<any>> = {
  [SocketMessageTypes.SIGN_UP]: SignUpSubject,
  [SocketMessageTypes.SIGN_IN]: SignInSubject,
  [SocketMessageTypes.SIGN_OUT]: SignOutSubject,
  [SocketMessageTypes.RENDER_BOARD]: RenderBoardSubject,
  [SocketMessageTypes.START_GAME]: StartGameSubject,
  [SocketMessageTypes.JOIN_GAME]: JoinGameSubject,
  [SocketMessageTypes.EXIT_GAME]: ExitGameSubject,
  [SocketMessageTypes.RENAME_USER]: RenameUserSubject,
  [SocketMessageTypes.USER_MOVE]: UserMoveSubject,
};

export const MessageBroker = (message: TSocketMessage) => {
  const handler = MessageHandlerMap[message.type];
  handler.emit(message.body);
};
