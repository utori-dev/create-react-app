import { Options } from 'yargs';
import resolveProjectPath from '../../util/resolveProjectPath';

/**
 * Resolves the relative path expecting that it starts from the managed project's root directory.
 *
 * @param path Relative path to the source directory
 * @returns Complete path to the source directory
 */
const coerce = (path: string) => resolveProjectPath(path).data;

/**
 * Option that allows the user to specify the source directory for their project.
 */
const sourceDirectory: Options = {
  coerce,
  default: 'src',
  describe: 'Directory where the project source files exist.',
  string: true,
}

export default sourceDirectory;
