import dotenv from 'dotenv';

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || 'someverysecretkey';
export const SOCKET_PATH = process.env.SOCKET_PATH || '';
export const SERVER_PORT: number = parseInt(process.env.PORT || '') || 8080;
export const MYSQL_HOST: string = process.env.MYSQL_HOST || '';
export const MYSQL_PORT: number = parseInt(process.env.MYSQL_PORT || '');
export const MYSQL_USER: string = process.env.MYSQL_USER || '';
export const MYSQL_PASSWORD: string = process.env.MYSQL_PASSWORD || '';
export const MYSQL_DATABASE: string = process.env.MYSQL_DATABASE || '';
