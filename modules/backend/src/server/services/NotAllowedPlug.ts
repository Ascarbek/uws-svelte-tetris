import { z } from 'zod';
import { TSocketMessageRoute, commonResponseShape } from '@split-tetris/types';

export const NotAllowedPlug: TSocketMessageRoute = {
  input: z.object({}),
  output: commonResponseShape,
  handler: () => {
    return {
      success: false,
      error: 'method not allowed',
    };
  },
};
