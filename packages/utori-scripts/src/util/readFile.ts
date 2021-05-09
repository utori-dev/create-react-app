import fs from 'fs';
import { Result, ResultType } from '../types/Result';

export type ReadFileOptions = { encoding: BufferEncoding; flag?: string; };
type ReadFileResult = Result<string, NodeJS.ErrnoException>;

const DEFAULT_OPTIONS: ReadFileOptions = {
  encoding: 'utf-8',
};

function readFile(path: string, options: ReadFileOptions = DEFAULT_OPTIONS): Promise<ReadFileResult> {
  return new Promise<ReadFileResult>(resolve => {
    fs.readFile(path, options, (error, data) => {
      if (error) {
        resolve({
          type: ResultType.ERROR,
          message: `Cannot read file '${path}'`,
          error,
        });

        return;
      }

      resolve({ data });
    });
  });
}

export default readFile;
