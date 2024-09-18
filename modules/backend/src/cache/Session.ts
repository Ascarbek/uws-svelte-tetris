import { TRoom } from '../shapes/RoomShapes.js';

export let sessions: TRoom[] = [];

export const getSessionById: (id: string) => TRoom | undefined = (id) => {
  return sessions.find((s) => s.id === id);
};

export const addNewSession: (params: TRoom) => void = (newSession) => {
  sessions = [...sessions, newSession];
};

export const removeSession: (id: string) => void = (id) => {
  sessions = sessions.filter((s) => s.id !== id);
};

export const updateSession: (params: TRoom) => void = (newSession) => {
  sessions = sessions.map<TRoom>((s) => (s.id === newSession.id ? { ...newSession } : s));
};

export const listSessions: () => TRoom[] = () => {
  return sessions;
};
