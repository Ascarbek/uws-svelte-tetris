import { z } from 'zod';

export const currentUserShape = z.object({
  jwt: z.string(),
  username: z.string(),
});

export type TCurrentUser = z.infer<typeof currentUserShape>;

export const dbUserShape = z.object({
  id: z.number(),
  username: z.string(),
  hash: z.string(),
  salt: z.string(),
});

export type TDbUser = z.infer<typeof dbUserShape>;
