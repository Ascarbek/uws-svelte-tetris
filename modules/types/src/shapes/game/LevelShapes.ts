import { z } from 'zod';

export const ROW_COUNT = 21;
export const COL_COUNT = 11;

export const levelCellDataShape = z.array(z.number()).length(ROW_COUNT * COL_COUNT);

export type TLevelCellData = z.infer<typeof levelCellDataShape>;
