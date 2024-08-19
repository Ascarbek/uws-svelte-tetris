import { z } from 'zod';
import { levelCellDataShape } from '../../shapes/game/LevelShapes.js';

export const renderBoardRequestShape = z.object({
  cells: levelCellDataShape,
});

export type TRenderBoardRequest = z.infer<typeof renderBoardRequestShape>;
