import { CommandModule } from 'yargs';

/**
 * Command to run unit tests the project managed by `utori-scripts`.
 * 
 * @todo #5 Implement this for `react-web-app` and potentially other types.
 */
const test: CommandModule = {
  command: 'test',
  describe: 'Runs unit tests for the project',
  handler: () => {
    throw new Error('This command is unsupported! See https://github.com/utori-dev/utori-scripts/issues/5 for status.');
  }
}

export default test;
