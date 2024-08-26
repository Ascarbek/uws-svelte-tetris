import type { TCurrentUser } from '@split-tetris/backend';
import { localStorageStore } from '$shared/LocalStorageStore';

export const CurrentUser = localStorageStore<TCurrentUser | null>('current-user-v1', null);
