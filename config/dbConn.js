// /* eslint-disable no-console */
// /* eslint-disable import/no-extraneous-dependencies */
// // eslint-disable-next-line import/no-extraneous-dependencies
// // eslint-disable-next-line import/no-extraneous-dependencies
// import pkg from 'pg';

// import env from 'dotenv';

// const { Pool } = pkg;

// env.config();

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DATABASE_NAME,
// });
// pool.connect(() => {
//   console.log('Database connected');
// });
// export default pool;
function config() {
  return {
    user: 'postgres',
    host: 'localhost',
    database: 'gameon_db_dev',
    password: 'Indium',
    port: 5432,
    multipleStatements: true,
    SQEC_RUN_MQ: 1,
  };
}

export default config;
