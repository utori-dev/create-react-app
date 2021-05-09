#!/usr/bin/env node

import yargs from 'yargs';
import build from './commands/build';
import lint from './commands/lint';
import start from './commands/start';
import test from './commands/test';

// Was getting some errors about `scriptName` and such being undefined.
// Tried a bunch of things, but this was all that worked.
(require('yargs') as typeof yargs)
  .scriptName('utori-scripts')
  .usage('$0 <cmd> [args]')
  .command(build)
  .command(lint)
  .command(start)
  .command(test)
  .strict(true)
  .demandCommand(1, 'You must specify at least one command')
  .help()
  .argv
