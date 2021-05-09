/**
 * The type of result that was returned.
 */
export enum ResultType {
  /**
   * Result was a success.
   */
  DATA = 'data',

  /**
   * An error occurred.
   */
  ERROR = 'error',

  /**
   * An unknown error occurred. This would likely be a caught error.
   */
  UNKNOWN_ERROR = 'unknown_error',

  /**
   * An error occurred, but data was still able to be returned.
   */
  WARNING = 'warning',

  /**
   * An unknown error occurred, but data was still able to be returned.
   */
  UNKNOWN_WARNING = 'unknown_warning',
}

/**
 * Defines properties that exist on all result types.
 */
type GeneralResult<T extends ResultType> = {
  /**
   * Describes the type of result that is being returned.
   */
  type: T;

  /**
   * Human-readable message for use in the console or UI.
   */
  message: string;
};

/**
 * Successful result that occurs when everything goes as expected.
 * This is the "happy path" result.
 */
// For a general data result, the type and message are optional.
export type DataResult<DATA> = Partial<GeneralResult<ResultType.DATA>> & {
  /**
   * Data that was returned.
   */
  data: DATA;

  /**
   * Error that occurred.
   * There should be no error for success results.
   */
  error?: undefined;
}

/**
 * Error result that occurs when something goes wrong.
 * This is for expected and definable errors.
 * For example, if making an HTTP request, we might expect we could get an HTTP error.
 */
export type ErrorResult<ERROR> = GeneralResult<ResultType.ERROR> & {
  /**
   * Data that was returned.
   * There should be no data for error results.
   */
  data?: undefined;

  /**
   * Error that occurred.
   */
  error: ERROR;
}

/**
 * Error result that occurs when an unknown error occurs.
 * This is for unexpected and undefinable errors.
 * For example, we don't know what type of error we are catching in a catch statement.
 */
export type UnknownErrorResult = GeneralResult<ResultType.UNKNOWN_ERROR> & {
  /**
   * Data that was returned.
   * There should be no data for error results.
   */
  data?: undefined;

  /**
   * Error that was caught.
   */
  error: any;
}

/**
 * Warning result that occurs when something goes wrong, but data is still returned.
 * This is for expected and definable errors.
 * For example, if making an HTTP request, we might expect we could get an HTTP error.
 * The data might be default data.
 */
export type WarningResult<DATA, ERROR> = GeneralResult<ResultType.WARNING> & {
  /**
   * Data that was returned.
   */
  data: DATA;

  /**
   * Error that occurred.
   */
  error: ERROR;
}

/**
 * Warning result that occurs when an unknown error occurs, but data is still returned.
 * This is for unexpected and undefinable errors.
 * For example, we don't know what type of error we are catching in a catch statement.
 * The data might be default data.
 */
export type UnknownWarningResult<DATA> = GeneralResult<ResultType.UNKNOWN_WARNING> & {
  /**
   * Data that was returned.
   */
  data: DATA;

  /**
   * Error that was caught.
   */
  error: any;
}

/**
 * Result returned from a promise, data source, or other function with unknown error types.
 */
export type SimpleResult<DATA> =
  DataResult<DATA> |
  UnknownErrorResult |
  UnknownWarningResult<DATA>;

/**
 * Result returned from a promise, data source, or other function.
 */
export type Result<DATA, ERROR> =
  DataResult<DATA> |
  ErrorResult<ERROR> |
  UnknownErrorResult |
  WarningResult<DATA, ERROR> |
  UnknownWarningResult<DATA>;
