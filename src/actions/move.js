import fs from 'fs';
import path from 'path';
import ejs from 'ejs';

const script = fs.readFileSync(path.join(__dirname, 'move.scpt'));
const template = ejs.compile(`${script}`);

export default (type, name, x, y, { document, layer }) => template({
    type,
    name,
    document: document || 1,
    layer: layer || 'Editable',
    x: x || 0,
    y: y || 0,
});
