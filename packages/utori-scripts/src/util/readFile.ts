import fs from 'fs';
import { SimpleResult, ResultType } from '../types/Result';

/**
 * Options for reading a file from the system.
 */
export type ReadFileOptions = {
  /**
   * Encoding of the file.
   * @default 'utf-8'
   */
  encoding?: BufferEncoding;

  /**
   * Flag passed to `fs.readFileSync()`.
   * {@link https://nodejs.org/api/fs.html#fs_file_system_flags See File System Flags Documentation}
   */
  flag?: string;
};

/**
 * Synchronously reads the contents of a file.
 *
 * @param path Path of file to be read
 * @param options Options for reading the file
 * @returns Contents of file
 */
function readFile(path: string, options: ReadFileOptions = {}): SimpleResult<string> {
  const { encoding = 'utf-8', flag } = options;

  try {
    const data = fs.readFileSync(path, { encoding, flag });
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
