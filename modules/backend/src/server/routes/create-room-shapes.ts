import { z } from 'zod';

export const createRoomRequestShape = z.object({
  jwt: z.string(),
});

export type TCreateRoomRequest = z.infer<typeof createRoomRequestShape>;
