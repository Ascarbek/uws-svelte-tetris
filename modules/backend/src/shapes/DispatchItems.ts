import { z } from 'zod';
import { SocketMessageTypes } from './SocketMessageShapes';
import { renderBoardRequestShape } from '../server/routes/render-board-route.js';
import { roomShape } from './RoomShapes.js';

export const dispatchItemShape = z.discriminatedUnion('type', [
  z.object({
    type: z.literal(SocketMessageTypes.RENDER_BOARD),
    body: renderBoardRequestShape,
  }),
  z.object({
    type: z.literal(SocketMessageTypes.LIST_ROOMS),
    body: z.object({
      success: z.literal(true),
      items: z.array(roomShape),
    }),
  }),
]);

export type TDispatchItem = z.infer<typeof dispatchItemShape>;

export type TDispatch = (item: TDispatchItem) => void;
