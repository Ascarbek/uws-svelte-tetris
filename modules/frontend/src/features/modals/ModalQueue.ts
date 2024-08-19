import { get } from 'svelte/store';
import type { ModalComponent } from '$stores/ModalStore';
import { ModalQueue } from '$stores/ModalStore';

export const pushModal = (modal: ModalComponent) => {
  const queue = get(ModalQueue);
  ModalQueue.set([...queue, modal]);
};

export const popModal = () => {
  const queue = get(ModalQueue);
  ModalQueue.set(queue.slice(0, queue.length - 1));
};
