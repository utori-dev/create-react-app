import { ResultType, SimpleResult } from '../types/Result';

export type ParseJsonOptions<T = object> = {
  /**
   * A function that validates the results.
   */
  validate?: (data: any) => SimpleResult<T>;

  /**
   * A function that transforms the results. This function is called for each member of the object.
   * If a member contains nested objects, the nested objects are transformed before the parent object is.
   * This is passed to the `JSON.parse` function.
   */
  reviver?: (this: any, key: string, value: any) => any;
};

type ParseJsonResult<T = any> = SimpleResult<T>;

function parseJson<T = any>(text: string, options: ParseJsonOptions<T> = {}): Promise<ParseJsonResult<T>> {
  return new Promise(resolve => {
    try {
      const data = JSON.parse(text, options.reviver);
      (options.validate) ? resolve(options.validate(data)) : resolve({ data });
    } catch (error) {
      resolve({
        type: ResultType.UNKNOWN_ERROR,
        error,
        message: `Cannot parse JSON from '${text}'`,
      });
    }
  })
}

export default parseJson;
