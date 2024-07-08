import dotenv from 'dotenv';

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || 'someverysecretkey';

export const SERVER_PORT: number = parseInt(process.env.PORT || '') || 8080;
