import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { Argv } from 'yargs';

export type CreateCommandLineInterfaceOptions = {
  scriptName: string;
};

function createCommandLineInterface(options: CreateCommandLineInterfaceOptions): Argv {
  const { scriptName } = options;

  return yargs(hideBin(process.argv))
    .scriptName(scriptName)
    .usage('$0 <cmd> [args]')
    .strictCommands(true)
    .demandCommand(1, 'You must specify at least one command')
    .help();
}

export default createCommandLineInterface;
