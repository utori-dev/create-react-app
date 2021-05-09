import { CommandModule } from 'yargs';

const build: CommandModule = {
  command: 'build',
  handler: () => {
    console.log('Build!');
  }
}

export default build;