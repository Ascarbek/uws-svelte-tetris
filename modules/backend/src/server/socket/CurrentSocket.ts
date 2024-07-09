import { WebSocket } from 'uWebSockets.js';
import { v4 as uid } from 'uuid';

let SocketMap: Record<string, WebSocket<{ socket_id: string }>> = {};

export const addSocket = (ws: WebSocket<{ socket_id: string }>) => {
  const id = uid();
  ws.getUserData().socket_id = id;
  SocketMap[id] = ws;
  return id;
};

export const removeSocket = (socket_id: string) => {
  delete SocketMap[socket_id];
};

export const getSocketById = (socket_id: string): WebSocket<{ socket_id: string }> | undefined => SocketMap[socket_id];
