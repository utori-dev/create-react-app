import fs from 'fs';
import path from 'path';
import { ResultType, SimpleResult } from '../types/Result';

/**
 * Root directory of the project being managed by `utori-scripts`.
 */
let rootProjectDirectory: string;

/**
 * Returns the root directory of the project being managed by `utori-scripts`.
 *
 * @returns Root directory of project.
 */
function getRootDirectory(): string {
  if (!rootProjectDirectory) rootProjectDirectory = fs.realpathSync(process.cwd());
  return rootProjectDirectory;
}

/**
 * Resolves a relative path into a complete path from the project's root directory.
 *
 * @param relativePath Path relative to the project's root directory
 * @returns Complete path
 */
function resolveProjectPath(relativePath: string): SimpleResult<string> {
  try {
    const data = path.resolve(getRootDirectory(), relativePath);
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
