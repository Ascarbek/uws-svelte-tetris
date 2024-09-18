import { MessageSender } from '$features/messages/MessageSender';
import type { TSignInRequest, TSignUpRequest } from '@split-tetris/backend';
import { SocketMessageTypes } from '@split-tetris/backend';
import { v4 as uid } from 'uuid';

export const signIn = (params: TSignInRequest) => {
  void MessageSender({
    id: uid(),
    type: SocketMessageTypes.SIGN_IN,
    body: params,
  });
};

export const signUp = (params: TSignUpRequest) => {
  void MessageSender({
    id: uid(),
    type: SocketMessageTypes.SIGN_UP,
    body: params,
  });
};
