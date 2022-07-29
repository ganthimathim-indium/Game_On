/* eslint-disable no-console */
/* eslint-disable import/extensions */
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import dotenv from 'dotenv';
import cors from 'cors';

// swager imports
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import cron from 'node-cron';
import allRoutes from './router.js';

dotenv.config();

const app = express();
// swagger options
const options = {
  swaggerDefinition: {
    openapi: '3.0.3',
    info: {
      title: 'GameOn Apis',
      version: '1.0.0',
      description: 'GameOn apis for storing device reports  ',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./swagger/*.js'],

};
const specs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

// It parses incoming requests with JSON payloads
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(session({
  secret: 'sessionsecretid',
  resave: true,
  saveUninitialized: true,
  _expires: 360000000 * 24,
}));
app.use(cors());
// Applying All Routes
app.use(allRoutes);
app.use(

  cors({

    origin: '*',

  }),

);

/// ******************global variables**************************

global.totalDuration = '';

global.totalDurationSeconds = '';
global.totalDurationMinutes = '';
global.totalDurationHourss = '';

/// ************************************************************

const port = process.env.GAMEON_APP_PORT || 3003;
app.listen(port, process.env.GAMEON_APP_HOSTNAME, () => console.log(`server is listening to port ${port} `));

cron.schedule('*/5 * * * *', () => {
  console.log(' "refreshing server!" ');
});
// eslint-disable-next-line max-len
// cron.schedule('* * * * *  find /home/indium/node_examples/Game_On "*.xlsx" -type f -mmin +5  -exec rm -f {} \');
// eslint-disable-next-line max-len
// cron.schedule('* * * * * find  /home/indium/node_examples/Game_On/"*.xlsx" -type f -mmin +1 -exec rm -f {} + ');
