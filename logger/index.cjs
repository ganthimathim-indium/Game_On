const winston = require('winston');

const logFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${label} ${level}: ${message}`;
  });
  
const logger = createLogger({
    format: format.combine(format.colorize(),
        timestamp({format: 'MM/dd/yy HH:mm:ss ZZZZ'}),
        logFormat
      ),
    transports: [
      new transports.Console(),
    ],
  });
  
