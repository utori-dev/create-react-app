import { ResultType, SimpleResult } from '../types/Result';
import parseJson, { ParseJsonOptions } from './parseJson';
import readFile, { ReadFileOptions } from './readFile';

type ReadJsonOptions<T = object> = Partial<ReadFileOptions> & ParseJsonOptions<T>;
type ReadJsonResult<T = any> = SimpleResult<T>;

function readJson<T = any>(path: string, options: ReadJsonOptions<T> = {}): ReadJsonResult<T> {
  const { encoding, flag, validate, reviver } = options;
  const readFileOptions: ReadFileOptions | undefined = encoding ? { encoding, flag } : undefined;

  try {
    const result = readFile(path, readFileOptions);

    if (result.type === ResultType.UNKNOWN_ERROR) return result as ReadJsonResult<T>;

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
