import { TDispatchItem } from '../../shapes/DispatchItems.js';
import { SocketMessageTypes } from '../../shapes/SocketMessageShapes.js';
import { PublishMessage } from '../socket/PublishMessage.js';

export const Publish: (data: TDispatchItem) => void = (data) => {
  switch (data.type) {
    case SocketMessageTypes.LIST_ROOMS:
      PublishMessage({ message_type: SocketMessageTypes.LIST_ROOMS, request: data });
      break;
  }
};
