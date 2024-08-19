import { z } from 'zod';
import { TSocketMessageRoute, commonResponseShape } from '../../lib/SocketMessageShapes.js';

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
