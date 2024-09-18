import { MessageReceiver } from '$features/messages/MessageReceiver';
import { PUBLIC_BACKEND_SOCKET_HOST } from '$env/static/public';
import { MessageQueue } from '$stores/Message';
import { derived, get, writable } from 'svelte/store';

const socket = writable<WebSocket | null>(null);
const connected = writable(false);
const connectionCount = writable(0);
const SendInProgress = writable<boolean>(false);

const connect = (): WebSocket => {
  connectionCount.set(get(connectionCount) + 1);
  console.log('new connection: ', get(connectionCount));
  const socket = new WebSocket(`${PUBLIC_BACKEND_SOCKET_HOST}/game`);
  socket.addEventListener<'message'>('message', (event) => {
    MessageReceiver(event.data);
  });
  socket.addEventListener('close', () => {
    connected.set(false);
  });
  return socket;
};

const waitForConnected = async (socket: WebSocket, startRetry: number = 0): Promise<boolean> => {
  const RETRY_TIMEOUT = 200;

  let retries = startRetry;
  while (socket.readyState !== socket.OPEN) {
    let isClosed = socket.readyState === socket.CLOSED;

    retries++;
    if (retries > 1) {
      console.log('trying to reconnect, retry: ', retries);
    }

    await new Promise((resolve) => setTimeout(resolve, RETRY_TIMEOUT * retries));

    if (isClosed) {
      return Promise.resolve<boolean>(false);
    }
  }
  return Promise.resolve<boolean>(true);
};

derived([MessageQueue, SendInProgress], ([queue, inProgress]) => {
  return { queue, inProgress };
}).subscribe(async ({ queue, inProgress }) => {
  if (queue.length > 0 && !inProgress) {
    SendInProgress.set(true);

    if (!get(connected)) {
      connected.set(true);
      const newSocket = connect();
      socket.set(newSocket);
    }

    const currentSocket = get(socket);
    if (currentSocket) {
      const active = await waitForConnected(currentSocket);
      if (!active) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        connected.set(false);
        SendInProgress.set(false);
        return;
      }
    }

    const firstMessage = queue[0];
    get(socket)?.send(JSON.stringify(firstMessage));

    MessageQueue.set([...get(MessageQueue).slice(1)]);
    SendInProgress.set(false);
  }
});

export const disconnect = () => {
  get(socket)?.close();
};
