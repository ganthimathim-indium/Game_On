/* eslint-disable import/no-duplicates */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imageUpload = (req, res) => {
  const { files } = req;
  console.log(files);
  global.imageName = files.files.name;
  Object.keys(files).forEach((key) => {
    const filepath = path.join(__dirname, '..', 'Images', files[key].name);
    files[key].mv(filepath, (err) => {
      if (err) return res.status(500).json({ status: 'error', message: err });
    });
  });

  return res.json({
    status: 'logged',
    message: 'logged',

  });
};

export default imageUpload;
