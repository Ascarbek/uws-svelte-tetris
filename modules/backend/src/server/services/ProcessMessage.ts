import { z } from 'zod';
import { TDispatch } from '@split-tetris/types';
import { LogError } from './Logger.js';
import { Dispatch } from './MessageDispatcher.js';

export const processMessage = async (
  socket_id: string,
  message_id: string,
  params: any,
  inputShape: z.AnyZodObject,
  outputShape: z.AnyZodObject | z.ZodDiscriminatedUnion<any, any> | z.ZodVoid,
  handler: (any: any, dispatch: TDispatch) => Promise<any>
) => {
  const input = inputShape.safeParse(params);
  if (!input.success) {
    LogError('error parsing input params: ', input.error);
    return null;
  }

  const result = await handler(input.data, (item) => Dispatch(item, socket_id, message_id));
  const output = outputShape.safeParse(result);
  if (!output.success) {
    LogError('error parsing handler result: ', output.error);
    return null;
  }

  return output.data;
};
