const fs = require('fs');
const path = require('path');

const cacheDir = path.join(__dirname, '..', 'node_modules/.cache');
fs.rmSync(cacheDir, { recursive: true, force: true });
