import { z } from 'zod';

export const currentUserShape = z.object({
  jwt: z.string(),
  username: z.string(),
});

export type TCurrentUser = z.infer<typeof currentUserShape>;
