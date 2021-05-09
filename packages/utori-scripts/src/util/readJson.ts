import { ResultType, SimpleResult } from '../types/Result';
import parseJson, { ParseJsonOptions } from './parseJson';
import readFile, { ReadFileOptions } from './readFile';

/**
 * Options for reading and parsing a JSON file from the system.
 */
export type ReadJsonOptions<T = object> = Partial<ReadFileOptions> & ParseJsonOptions<T>;

/**
 * Synchronously reads a JSON file and parses it into an object.
 *
 * @param path Path to the JSON file
 * @param options Options for reading and parsing the JSON file
 * @returns Result from reading the JSON object
 */
function readJson<T = any>(path: string, options: ReadJsonOptions<T> = {}): SimpleResult<T> {
  const { encoding, flag, validate, reviver } = options;
  const readFileOptions: ReadFileOptions | undefined = encoding ? { encoding, flag } : undefined;

  try {
    const result = readFile(path, readFileOptions);

    if (result.type === ResultType.UNKNOWN_ERROR) return result;

    try {
      return parseJson(result.data, { validate, reviver });
    } catch (error) {
      return {
        type: ResultType.UNKNOWN_ERROR,
        message: `Unknown error occurred while parse '${result.data}'`,
        error,
      };
    }
  } catch (error) {
    return {
      type: ResultType.UNKNOWN_ERROR,
      message: `Unknown error occurred while attempting to read file '${path}'`,
      error,
    };
  }
}

export default readJson;
