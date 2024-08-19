import { z } from 'zod';
import { TSocketMessageRoute, commonResponseShape } from '../../lib/SocketMessageShapes.js';
import { signUpHandler } from '../handlers/sign-up-handler.js';

export const signUpRequestShape = z.object({
  username: z.string(),
  password: z.string(),
});

export type TSignUpRequest = z.infer<typeof signUpRequestShape>;

export const signUpRoute: TSocketMessageRoute = {
  input: signUpRequestShape,
  output: commonResponseShape,
  handler: signUpHandler,
};
