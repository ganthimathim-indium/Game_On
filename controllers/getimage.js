/* eslint-disable no-underscore-dangle */
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

global.fileName = 'image1.jpg';
const getImage = (req, res) => res.sendFile(`${__dirname.split('controllers')[0]}images/${global.fileName}`);
export default getImage;
// /home/indium/Documents/Game_On/images/image1.jpg
