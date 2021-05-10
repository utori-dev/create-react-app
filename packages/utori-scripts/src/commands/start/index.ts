import { CommandModule } from 'yargs';
import { ProjectConfig } from '../../types/ProjectConfig';
import handler from './handler';

/**
 * Command to serve the project managed by `utori-scripts`.
 * 
 * @todo #4 Implement this for `react-web-app`.
 */
const start: CommandModule<{}, ProjectConfig> = {
  command: 'start',
  describe: 'Serves the project',
  handler,
}

export default start;
