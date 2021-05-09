import { CommandModule } from 'yargs';

const lint: CommandModule = {
  command: 'lint',
  handler: () => {
    console.log('Lint!');
  }
}

export default lint;