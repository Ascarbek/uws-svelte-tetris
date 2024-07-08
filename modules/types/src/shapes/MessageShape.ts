import { z } from 'zod';
import { Messages } from '../lib/Messages.js';

export const messageShape = z.object({
  messageId: z.string(),
  type: z.nativeEnum(Messages),
  body: z.any(),
});

export type TMessage = z.infer<typeof messageShape>;
