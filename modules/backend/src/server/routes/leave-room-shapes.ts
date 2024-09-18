import { z } from 'zod';

export const leaveRoomRequestShape = z.object({
  jwt: z.string(),
  sessionId: z.string(),
});

export type TLeaveRoomRequest = z.infer<typeof leaveRoomRequestShape>;
