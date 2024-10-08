import { z } from 'zod';

export const signUpRequestShape = z.object({
  username: z.string(),
  password: z.string(),
});

export type TSignUpRequest = z.infer<typeof signUpRequestShape>;
