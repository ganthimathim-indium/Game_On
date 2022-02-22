/* eslint-disable no-console */
import pkg from 'pg';
import { readFile } from 'fs/promises';

const config = JSON.parse(await readFile('./config/dev.json'));
const { Pool } = pkg;

const pool = new Pool(config.dbConfig);

pool.on('connect', () => {
  console.log('connected to the db');
});

export default {
  pool,
};
