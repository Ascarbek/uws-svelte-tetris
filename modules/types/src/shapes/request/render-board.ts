import { z } from 'zod';
import { levelCellDataShape } from '../LevelShapes.js';

export const renderBoardRequestShape = z.object({
  cells: levelCellDataShape,
});

export type TRenderBoardRequest = z.infer<typeof renderBoardRequestShape>;
