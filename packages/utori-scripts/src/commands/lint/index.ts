import { CommandModule } from 'yargs';

/**
 * Command to lint the project managed by `utori-scripts`.
 * 
 * @todo #6 Implement this for `react-web-app`.
 */
const lint: CommandModule = {
  command: 'lint',
  describe: 'Runs linting on the project',
  handler: () => {
    throw new Error('This command is unsupported! See https://github.com/utori-dev/utori-scripts/issues/6 for status.');
  }
}

export default lint;
