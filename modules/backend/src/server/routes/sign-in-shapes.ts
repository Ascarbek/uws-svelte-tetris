import { z } from 'zod';

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

export type TSignInResponse = z.infer<typeof signInResponseShape>;
