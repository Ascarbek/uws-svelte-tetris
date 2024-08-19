import { writable } from 'svelte/store';
import type { TSocketMessage } from '@split-tetris/backend';

export const MessageQueue = writable<TSocketMessage[]>([]);
