#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .scriptName('utori-util-scripts')
  .usage('$0 <cmd> [args]')
  .strictCommands(true)
  .demandCommand(1, 'You must specify at least one command')
  .help().argv;
