import { z } from 'zod';
import { TSocketMessageRoute } from '../../shapes/SocketMessageShapes.js';
import { commonResponseShape } from '../../shapes/Common.js';

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
