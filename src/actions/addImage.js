import fs from 'fs';
import path from 'path';
import ejs from 'ejs';

const script = fs.readFileSync(path.join(__dirname, 'addImage.scpt'));
const template = ejs.compile(`${script}`);

export default (imagePath, { x, y, name, document }) => template({
    path: imagePath,
    name: name || 'image',
    document: document || 1,
    x: x || 0,
    y: y || 0,
});