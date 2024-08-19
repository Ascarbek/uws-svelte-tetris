import { get } from 'svelte/store';
import { MessageModal, MessageModalData, SignInModal } from '$stores/ModalStore';
import { pushModal } from '$features/modals/ModalQueue';

export const showMessage = (title: string, message: string) => {
  MessageModalData.set({
    title,
    message,
  });
  const messageModal = get(MessageModal);
  pushModal(messageModal);
};

export const showSignIn = () => {
  const modal = get(SignInModal);
  pushModal(modal);
};
