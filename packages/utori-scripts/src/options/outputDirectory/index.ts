import { Options } from 'yargs';
import resolveProjectPath from '../../util/resolveProjectPath';

const coerce = (path: string) => resolveProjectPath(path).data;

const outputDirectory: Options = {
  coerce,
  default: 'dist',
  describe: 'Directory where the project will be built.',
  string: true,
}

export default outputDirectory;
