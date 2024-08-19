import knex from 'knex';
import { MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USER } from '../server/Environment.js';

const instance = knex({
  client: 'mysql',
  version: '5.7',
  connection: {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  },
});

export default instance;
