import { CommandModule } from 'yargs';

const start: CommandModule = {
  command: 'start',
  handler: () => {
    console.log('Start!');
  }
}

export default start;