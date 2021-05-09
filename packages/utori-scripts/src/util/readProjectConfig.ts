import { ProjectConfig } from '../types/ProjectConfig';
import readJson from './readJson';
import resolveProjectPath from './resolveProjectPath';
import validateProjectConfig from './validateProjectConfig';

const DEFAULT_CONFIG_PATH = 'utori.conf.json';

function readConfig(path: string = DEFAULT_CONFIG_PATH): ProjectConfig {
  const configPath = resolveProjectPath(path);

  if (!configPath.data) {
    console.error(configPath.message, configPath.error);
    throw new Error(configPath.message);
  }

  const result = readJson(configPath.data, { validate: validateProjectConfig });

  if (!result.data) {
    console.error(result.message, result.error);
    throw new Error(result.message);
  }

  return result.data;
}

export default readConfig;
