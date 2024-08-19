import { z } from 'zod';
import { TDispatch } from '../shapes/DispatchItems.js';

export enum SocketMessageTypes {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  RENAME_USER,
  START_GAME,
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

export const commonResponseShape = z.discriminatedUnion('success', [
  z.object({
    success: z.literal(true),
  }),
  z.object({
    success: z.literal(false),
    error: z.string(),
  }),
]);

export type TCommonResponse = z.infer<typeof commonResponseShape>;

export type TSocketMessageRoute = {
  input: z.AnyZodObject;
  output: z.AnyZodObject | z.ZodDiscriminatedUnion<any, any> | z.ZodVoid;
  handler: (params: any, dispatch: TDispatch) => any;
};
