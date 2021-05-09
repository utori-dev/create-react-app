import { Result, ResultType, SimpleResult } from '../types/Result';
import parseJson, { ParseJsonOptions } from './parseJson';
import readFile, { ReadFileOptions } from './readFile';

type ReadJsonOptions<T = object> = Partial<ReadFileOptions> & ParseJsonOptions<T>;

type ReadJsonError = NodeJS.ErrnoException | Error;
type ReadJsonResult<T = any> = Result<T, ReadJsonError>;

function readJson<T = any>(path: string, options: ReadJsonOptions<T>): Promise<ReadJsonResult<T>> {
  const { encoding, flag, validate, reviver } = options;
  const readFileOptions: ReadFileOptions | undefined = encoding ? { encoding, flag } : undefined;

  return readFile(path, readFileOptions).then(
    result => {
      switch (result.type) {
        case ResultType.ERROR:
        case ResultType.UNKNOWN_ERROR:
          return result as ReadJsonResult<T>;
        case ResultType.DATA:
        // The warning types should not occur with readFile. If they do, they still provide data.
        case ResultType.WARNING:
        case ResultType.UNKNOWN_WARNING:
        // No type means ResultType.DATA
        default:
          return parseJson(result.data, { validate, reviver });
      }
    },
    error => ({
      type: ResultType.UNKNOWN_ERROR,
      message: `Unknown error occurred while attempting to read file '${path}'`,
      error,
    })
  );
}

export default readJson;
