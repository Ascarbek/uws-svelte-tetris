import { z } from 'zod';
import { SocketMessageTypes } from './SocketMessageShapes';
import { renderBoardRequestShape } from '../server/routes/render-board-route.js';
import { gameSession } from './GameSessionShape.js';

export const dispatchItemShape = z.discriminatedUnion('type', [
  z.object({
    type: z.literal(SocketMessageTypes.RENDER_BOARD),
    body: renderBoardRequestShape,
  }),
  z.object({
    type: z.literal(SocketMessageTypes.LIST_GAMES),
    body: z.object({
      success: z.literal(true),
      items: z.array(gameSession),
    }),
  }),
]);

export type TDispatchItem = z.infer<typeof dispatchItemShape>;

export type TDispatch = (item: TDispatchItem) => void;
