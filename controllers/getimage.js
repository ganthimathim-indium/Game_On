/* eslint-disable no-underscore-dangle */
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getImage = (req, res) => {
  const getImageName = req.query.imagename;
  // res.send(getImageName);
  res.sendFile(`${__dirname.split('controllers')[0]}Images/${getImageName}`);
};

export default getImage;
// /home/indium/Documents/Game_On/images/image1.jpg
