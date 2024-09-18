import { z } from 'zod';
import { roomShape } from '../../shapes/RoomShapes.js';

export const listGamesRequestShape = z.object({
  jwt: z.string(),
});

export type TListGamesRequest = z.infer<typeof listGamesRequestShape>;

export const listGamesResponseShape = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
    items: z.array(roomShape),
  }),
  z.object({
    success: z.literal(false),
    error: z.string(),
  }),
]);

export type TListGamesResponse = z.infer<typeof listGamesResponseShape>;
