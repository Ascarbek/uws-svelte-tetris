import { z } from 'zod';
import { gameSession } from '../../shapes/GameShapes.js';

export const listGamesRequestShape = z.object({
  jwt: z.string(),
});

export type TListGamesRequest = z.infer<typeof listGamesRequestShape>;

export const listGamesResponseShape = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
    items: z.array(gameSession),
  }),
  z.object({
    success: z.literal(false),
    error: z.string(),
  }),
]);

export type TListGamesResponse = z.infer<typeof listGamesResponseShape>;
