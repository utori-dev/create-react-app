import { CommandModule } from 'yargs';

const test: CommandModule = {
  command: 'test',
  handler: () => {
    console.log('Test!');
  }
}

export default test;