import { z } from 'zod';
import { TDispatch } from '../../shapes/DispatchItems.js';
import { LogError } from './Logger.js';
import { Dispatch } from './MessageDispatcher.js';
import { Publish } from './MessagePublisher.js';

export const processMessage = async (
  socket_id: string,
  message_id: string,
  params: any,
  inputShape: z.AnyZodObject,
  outputShape: z.AnyZodObject | z.ZodDiscriminatedUnion<any, any> | z.ZodVoid,
  handler: (any: any, dispatch: TDispatch, publish: TDispatch) => Promise<any>
) => {
  const input = inputShape.safeParse(params);
  if (!input.success) {
    LogError('error parsing input params: ', input.error);
    return null;
  }

  let handlerResult: any;

  try {
    handlerResult = await handler(
      input.data,
      (item) => Dispatch(item, socket_id, message_id),
      (item) => Publish(item)
    );
  } catch (e) {
    LogError('error executing handler: ', e);
    return null;
  }

  const output = outputShape.safeParse(handlerResult);
  if (!output.success) {
    LogError('error parsing handler result: ', output.error);
    return null;
  }

  return output.data;
};
