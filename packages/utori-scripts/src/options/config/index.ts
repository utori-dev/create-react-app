import fs from 'fs';
import { Options } from 'yargs';
import { ProjectConfig } from '../../types/ProjectConfig';
import readJson from '../../util/readJson';
import resolveProjectPath from '../../util/resolveProjectPath';

/**
 * Resolves the relative path expecting that it starts from the managed project's root directory.
 *
 * @param path Relative path to the configuration file
 * @returns Complete path to the configuration file
 */
const coerce = (path: string) => resolveProjectPath(path).data;

/**
 * Read and parse the project configuration.
 *
 * @param configPath Complete path to the configuration file
 * @returns `ProjectConfig` parsed from the file
 */
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

/**
 * Option that allows the user to specify a configuration file for `utori-scripts`.
 */
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
