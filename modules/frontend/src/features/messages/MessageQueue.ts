import { MessageReceiver } from '$features/messages/MessageReceiver';
import { PUBLIC_BACKEND_SOCKET_HOST } from '$env/static/public';
import { MessageQueue } from '$stores/Message';
import { derived, get, writable } from 'svelte/store';

const socket = writable<WebSocket | null>(null);
const connected = writable(false);
const connectionCount = writable(0);
const sendInProgress = writable<boolean>(false);

const connect = (): WebSocket => {
  connectionCount.set(get(connectionCount) + 1);
  console.log('new connection: ', get(connectionCount));
  const socket = new WebSocket(`${PUBLIC_BACKEND_SOCKET_HOST}`);
  socket.addEventListener('message', (event) => {
    MessageReceiver(event.data);
  });
  socket.addEventListener('close', () => {
    connected.set(false);
  });
  return socket;
};

// wait for socket status to become open
const waitForConnected = async (socket: WebSocket, startRetry: number = 0): Promise<boolean> => {
  const RETRY_TIMEOUT = 200;

  let retries = startRetry;
  while (socket.readyState !== socket.OPEN) {
    let isClosed = socket.readyState === socket.CLOSED;

    retries++;
    if (retries > 1) {
      console.log('trying to reconnect, retry: ', retries);
    }

    // increase wait time on each retry
    await new Promise((resolve) => setTimeout(resolve, RETRY_TIMEOUT * retries));

    if (isClosed) {
      return Promise.resolve<boolean>(false);
    }
  }
  return Promise.resolve<boolean>(true);
};

export const startMessageListener = () => {
  // Main event that runs on adding message to the queue
  return derived([MessageQueue, sendInProgress], ([queue, inProgress]) => {
    return { queue, inProgress };
  }).subscribe(async ({ queue, inProgress }) => {
    // exit if another message sending is in progress
    if (queue.length > 0 && !inProgress) {
      // block the queue
      sendInProgress.set(true);

      // create socket on first message or disconnect
      if (!get(connected) && !get(socket)) {
        connected.set(true);
        const newSocket = connect();
        socket.set(newSocket);
      }

      // grab the socket
      const currentSocket = get(socket);
      if (currentSocket) {
        // if socket was just created then wait unit it's open
        const active = await waitForConnected(currentSocket);
        // if socket was disconnected
        if (!active) {
          // delay between reconnects
          await new Promise((resolve) => setTimeout(resolve, 1000));
          // trigger socket recreation
          connected.set(false);
          // release the queue
          sendInProgress.set(false);
          return () => {
            currentSocket.close();
          };
        }
      }

      // send first message in the queue
      const firstMessage = queue[0];
      get(socket)?.send(JSON.stringify(firstMessage));

      // remove first message from the queue
      MessageQueue.set([...get(MessageQueue).slice(1)]);
      // release the queue
      sendInProgress.set(false);
    }
    return () => {
      get(socket)?.close();
    };
  });
};

export const disconnect = () => {
  get(socket)?.close();
};
