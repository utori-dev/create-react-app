import { ResultType, SimpleResult } from '../types/Result';

/**
 * Options for parsing a JSON object from text.
 */
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

/**
 * Parse the provided text into JSON.
 *
 * @param text Text to parse into JSON
 * @param options Options for parsing and validating the JSON
 * @returns Result from parsing the JSON
 */
function parseJson<T = any>(text: string, options: ParseJsonOptions<T> = {}): SimpleResult<T> {
  try {
    const data = JSON.parse(text, options.reviver);
    return (options.validate) ? (options.validate(data)) : ({ data });
  } catch (error) {
    return {
      type: ResultType.UNKNOWN_ERROR,
      error,
      message: `Cannot parse JSON from '${text}'`,
    };
  }
}

export default parseJson;
