import fs from 'fs';
import path from 'path';
import { ResultType, SimpleResult } from '../types/Result';

function resolveProjectPath(relativePath: string): Promise<SimpleResult<string>> {
  return new Promise(resolve => {
    try {
      const rootDirectory = fs.realpathSync(process.cwd());
      const data = path.resolve(rootDirectory, relativePath);
      return resolve({ data });
    } catch (error) {
      return resolve({
        type: ResultType.UNKNOWN_ERROR,
        message: `Cannot resolve path ${relativePath}`,
        error,
      });
    }
  })
}

export default resolveProjectPath;
