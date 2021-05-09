import { Options } from 'yargs';
import resolveProjectPath from '../../util/resolveProjectPath';

const coerce = (path: string) => resolveProjectPath(path).data;

const sourceDirectory: Options = {
  coerce,
  default: 'src',
  describe: 'Directory where the project source files exist.',
  string: true,
}

export default sourceDirectory;
