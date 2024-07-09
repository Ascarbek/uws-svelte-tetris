import { z } from 'zod';
import { SocketMessageTypes } from '../lib/SocketMessageShapes.js';
import { renderBoardRequestShape } from './request/render-board.js';

export const dispatchItemShape = z.discriminatedUnion('type', [
  z.object({
    id: z.string(),
    type: z.literal(SocketMessageTypes.RENDER_BOARD),
    body: renderBoardRequestShape,
  }),
]);

export type TDispatchItem = z.infer<typeof dispatchItemShape>;
