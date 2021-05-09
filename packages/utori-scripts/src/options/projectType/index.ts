import { Options } from 'yargs';
import { ProjectType } from '../../types/ProjectConfig';

/**
 * Option that allows the user to specify the project type.
 * This is read in from the configuration file by default.
 */
const projectType: Options = {
  choices: Object.values(ProjectType),
  demandOption: true,
  describe: 'Type of project being managed',
  string: true,
}

export default projectType;
