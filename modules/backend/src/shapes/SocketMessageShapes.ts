import { z } from 'zod';
import { TDispatch } from './DispatchItems';

export enum SocketMessageTypes {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  RENAME_USER,
  LIST_ROOMS,
  START_GAME,
  JOIN_GAME,
  USER_MOVE,
  EXIT_GAME,
  RENDER_BOARD,
}

export const socketMessageShape = z.object({
  id: z.string(),
  type: z.nativeEnum(SocketMessageTypes),
  body: z.any(),
});

export type TSocketMessage = z.infer<typeof socketMessageShape>;

export type TSocketMessageRoute = {
  input: z.AnyZodObject;
  output: z.AnyZodObject | z.ZodDiscriminatedUnion<any, any> | z.ZodVoid;
  handler: (params: any, dispatch: TDispatch) => any;
};
