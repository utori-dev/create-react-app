import { CommandModule } from 'yargs';
import { ProjectConfig } from '../../types/ProjectConfig';

/**
 * Command to serve the project managed by `utori-scripts`.
 * 
 * @todo #4 Implement this for `react-web-app`.
 */
const start: CommandModule<{}, ProjectConfig> = {
  command: 'start',
  describe: 'Serves the project',
  handler: () => {
    throw new Error('This command is unsupported! See https://github.com/utori-dev/utori-scripts/issues/4 for status.');
  }
}

export default start;
