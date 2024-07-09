import { z } from 'zod';

export const signInRequestShape = z.object({
  sessionId: z.string(),
});

export type TSignInRequest = z.infer<typeof signInRequestShape>;
