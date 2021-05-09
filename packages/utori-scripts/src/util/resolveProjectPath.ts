import fs from 'fs';
import path from 'path';
import { ResultType, SimpleResult } from '../types/Result';

function resolveProjectPath(relativePath: string): SimpleResult<string> {
  try {
    const rootDirectory = fs.realpathSync(process.cwd());
    const data = path.resolve(rootDirectory, relativePath);
    return ({ data });
  } catch (error) {
    return ({
      type: ResultType.UNKNOWN_ERROR,
      message: `Cannot resolve path ${relativePath}`,
      error,
    });
  }
}

export default resolveProjectPath;
