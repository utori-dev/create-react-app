import fs from 'fs';
import { Options } from 'yargs';
import { ProjectConfig } from '../../types/ProjectConfig';
import readJson from '../../util/readJson';
import resolveProjectPath from '../../util/resolveProjectPath';

const coerce = (path: string) => resolveProjectPath(path).data;

const configParser: Options['configParser'] = (configPath: string): Partial<ProjectConfig> => {
  if (!fs.existsSync(configPath)) {
    console.warn(`Configuration file '${configPath}' does not exist.`);
    return {};
  }

  const result = readJson(configPath);

  if (!result.data) {
    console.error(result.message, result.error);
    return {};
  }

  return result.data;
}

const config: Options = {
  alias: 'c',
  coerce,
  config: true,
  configParser,
  default: 'utori.conf.json',
  describe: 'Path to the configuration for utori-scripts',
  string: true,
}

export default config;
