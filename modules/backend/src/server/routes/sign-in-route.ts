import { z } from 'zod';
import { TSocketMessageRoute, commonResponseShape } from '../../lib/SocketMessageShapes.js';
import { signInHandler } from '../handlers/sign-in-handler.js';

export const signInRequestShape = z.object({
  username: z.string(),
  password: z.string(),
});

export type TSignInRequest = z.infer<typeof signInRequestShape>;

export const signInRoute: TSocketMessageRoute = {
  input: signInRequestShape,
  output: commonResponseShape,
  handler: signInHandler,
};
