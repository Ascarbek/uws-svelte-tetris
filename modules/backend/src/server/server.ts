import { App } from 'uWebSockets.js';
import { OpenConnection } from './socket/OpenConnection.js';
import { CloseConnection } from './socket/CloseConnection.js';
import { ReceiveMessage } from './socket/ReceiveMessage.js';
import { SERVER_PORT } from './Environment.js';
import { LogMessage } from './services/Logger.js';

export const startServer = () => {
  LogMessage('starting backend server...');
  const server = App({});

  server
    .ws<{ socket_id: string }>('/game', {
      open: OpenConnection,
      close: CloseConnection,
      message: ReceiveMessage,
    })
    .listen(SERVER_PORT, () => {
      LogMessage('backend server is running on: ', SERVER_PORT);
    });
};
