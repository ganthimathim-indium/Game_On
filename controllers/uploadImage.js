/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const imageUpload = (req, res) => {
//   const { files } = req;
//   console.log(files);
//   global.imageName = files.files.name;
//   Object.keys(files).forEach((key) => {
//     const filepath = path.join(__dirname, '..', 'Images', files[key].name);
//     files[key].mv(filepath, (err) => {
//       if (err) return res.status(500).json({ status: 'error', message: err });
//     });
//   });

//   return res.json({
//     status: `file://${__dirname.split('controllers')[0]}Images/${global.imageName}`,
//     message: 'logged',

//   });
// };
const imageUpload = (req, res) => {
  const { encImage, imgName } = req.body;
  // base64 encription
  // console.log(Buffer.from(encImage).toString('base64'));
  // const b64Encoded = Buffer.from(encImage).toString('base64');
  // base64 decription
  console.log(Buffer.from(encImage, 'base64'));
  const img = Buffer.from(encImage, 'base64');
  //
  global.imageName = imgName;

  const filepath = path.join(__dirname, '..', 'Images', imgName);
  fs.writeFile(filepath, img, (err) => {
    if (err) return res.status(500).json({ status: 'error', message: err });
  });

  return res.json({
    status: `http://localhost:3000/image?imagename=${global.imageName}`,
    message: 'logged',
  });
};

export default imageUpload;
