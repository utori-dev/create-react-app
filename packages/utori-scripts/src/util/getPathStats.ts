import fs from 'fs';

function getPathStats(path: string): fs.Stats | null {
  return fs.existsSync(path) ? fs.lstatSync(path) : null;
}

export default getPathStats;
