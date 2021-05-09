import { CommandModule } from 'yargs';

/**
 * Command to build the project managed by `utori-scripts`.
 * 
 * @todo #3 Implement this for `react-web-app`.
 */
const build: CommandModule = {
  command: 'build',
  describe: 'Builds the project for production',
  handler: (args) => {
    console.log(args)
    // throw new Error('This command is unsupported! See https://github.com/utori-dev/utori-scripts/issues/3 for status.');
  }
}

export default build;
