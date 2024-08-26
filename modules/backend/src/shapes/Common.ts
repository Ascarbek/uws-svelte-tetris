import { z } from 'zod';

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
