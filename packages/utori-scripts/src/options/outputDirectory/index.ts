import { Options } from 'yargs';
import resolveProjectPath from '../../util/resolveProjectPath';

/**
 * Resolves the relative path expecting that it starts from the managed project's root directory.
 *
 * @param path Relative path to the output directory
 * @returns Complete path to the output directory
 */
const coerce = (path: string) => resolveProjectPath(path).data;

/**
 * Option that allows the user to specify the output directory for their project.
 */
const outputDirectory: Options = {
  coerce,
  default: 'dist',
  describe: 'Directory where the project will be built.',
  string: true,
}

export default outputDirectory;
