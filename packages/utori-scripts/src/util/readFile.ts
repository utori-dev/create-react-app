import fs from 'fs';
import { SimpleResult, ResultType } from '../types/Result';

export type ReadFileOptions = { encoding: BufferEncoding; flag?: string; };
type ReadFileResult = SimpleResult<string>;

const DEFAULT_OPTIONS: ReadFileOptions = {
  encoding: 'utf-8',
};

function readFile(path: string, options: ReadFileOptions = DEFAULT_OPTIONS): ReadFileResult {
  try {
    const data = fs.readFileSync(path, options);
    return { data };
  } catch (error) {
    return {
      type: ResultType.UNKNOWN_ERROR,
      message: `Cannot read file '${path}'`,
      error,
    };
  }
}

export default readFile;
