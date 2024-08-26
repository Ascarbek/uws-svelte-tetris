import { z } from 'zod';

export const joinGameRequestShape = z.object({
  jwt: z.string(),
  sessionId: z.string(),
});

export type TJoinGameRequest = z.infer<typeof joinGameRequestShape>;
