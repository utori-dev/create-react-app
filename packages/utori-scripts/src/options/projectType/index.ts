import { Options } from 'yargs';
import { ProjectType } from '../../types/ProjectConfig';

const projectType: Options = {
  choices: Object.values(ProjectType),
  demandOption: true,
  describe: 'Type of project being managed',
  string: true,
}

export default projectType;
