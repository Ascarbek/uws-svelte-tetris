import { z } from 'zod';
import { TSocketMessageRoute, commonResponseShape } from '../../lib/SocketMessageShapes.js';
import { signInHandler } from '../handlers/sign-in-handler.js';

export const signInRequestShape = z.object({
  username: z.string(),
  password: z.string(),
});

export type TSignInRequest = z.infer<typeof signInRequestShape>;

export const signInResponseShape = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
    data: z.object({
      jwt: z.string(),
    }),
  }),
  z.object({
    success: z.literal(false),
    error: z.string(),
  }),
]);

export const signInRoute: TSocketMessageRoute = {
  input: signInRequestShape,
  output: commonResponseShape,
  handler: signInHandler,
};
