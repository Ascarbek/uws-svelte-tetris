import { z } from 'zod';

export const joinRoomRequestShape = z.object({
  jwt: z.string(),
  sessionId: z.string(),
});

export type TJoinRoomRequest = z.infer<typeof joinRoomRequestShape>;
