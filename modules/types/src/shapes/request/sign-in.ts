import { z } from 'zod';

export const signInRequestShape = z.object({
  username: z.string(),
  password: z.string(),
});

export type TSignInRequest = z.infer<typeof signInRequestShape>;
