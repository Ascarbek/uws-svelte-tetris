import { z } from 'zod';
import { levelCellDataShape } from './LevelShapes.js';

export const gameSession = z.object({
  id: z.string(),
  host: z.object({
    id: z.number(),
    username: z.string(),
  }),
  guests: z.array(
    z.object({
      id: z.number(),
      username: z.string(),
    })
  ),
  cells: levelCellDataShape,
  created: z.number(),
});

export type TGameSession = z.infer<typeof gameSession>;
