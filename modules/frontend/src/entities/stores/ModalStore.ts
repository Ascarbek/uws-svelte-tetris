import { writable } from 'svelte/store';
import type { SvelteComponent } from 'svelte';

export type ModalComponent = typeof SvelteComponent<Record<never, never>> | null;

export const ModalQueue = writable<ModalComponent[]>([]);

export const MessageModal = writable<ModalComponent>(null);
export const MessageModalData = writable<{ title: string; message: string }>({ title: '', message: '' });

export const SignInModal = writable<ModalComponent>(null);
