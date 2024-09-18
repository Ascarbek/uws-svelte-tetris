import { z } from 'zod';
import { roomShape } from '../../shapes/RoomShapes.js';

export const listRoomsRequestShape = z.object({
  jwt: z.string(),
});

export type TListRoomsRequest = z.infer<typeof listRoomsRequestShape>;

export const listRoomsResponseShape = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
    items: z.array(roomShape),
  }),
  z.object({
    success: z.literal(false),
    error: z.string(),
  }),
]);

export type TListRoomsResponse = z.infer<typeof listRoomsResponseShape>;
