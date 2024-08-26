import { z } from 'zod';

export const startGameRequestShape = z.object({
  jwt: z.string(),
});

export type TStartGameRequest = z.infer<typeof startGameRequestShape>;
