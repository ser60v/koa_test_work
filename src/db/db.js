import mysql from 'promise-mysql';
import { env } from '../lib/env';

console.log(env.DB_DATABASE)

const config = {
  host: env.DB_HOST+'',
  port: parseInt(env.DB_PORT),
  user: env.DB_USER+'',
  password: env.DB_PASSWORD+'',
  database: env.DB_DATABASE+'',
  connectionLimit: 100,
};

const pool = mysql.createPool(config);

export default pool;
