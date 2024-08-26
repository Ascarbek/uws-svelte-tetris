import { TGameSession } from '../shapes/GameShapes.js';

export let sessions: TGameSession[] = [];

export const getSessionById: (id: string) => TGameSession | undefined = (id) => {
  return sessions.find((s) => s.id === id);
};

export const addNewSession: (params: TGameSession) => void = (newSession) => {
  sessions = [...sessions, newSession];
};

export const removeSession: (id: string) => void = (id) => {
  sessions = sessions.filter((s) => s.id !== id);
};

export const updateSession: (params: TGameSession) => void = (newSession) => {
  sessions = sessions.map<TGameSession>((s) => (s.id === newSession.id ? { ...newSession } : s));
};
