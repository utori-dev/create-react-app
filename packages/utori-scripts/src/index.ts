#!/usr/bin/env node

import yargs from 'yargs';
import build from './commands/build';
import lint from './commands/lint';
import start from './commands/start';
import test from './commands/test';
import readConfig from './util/readProjectConfig';

// Was getting some errors about `scriptName` and such being undefined.
// Tried a bunch of things, but this was all that worked.
(require('yargs') as typeof yargs)
  .scriptName('utori-scripts')
  .usage('$0 <cmd> [args]')
  .config('config', readConfig)
  .option('config', {
    alias: 'c',
    default: 'utori.conf.json',
    type: 'string',
  })
  .command(build)
  .command(lint)
  .command(start)
  .command(test)
  .strictCommands(true)
  .demandCommand(1, 'You must specify at least one command')
  .help()
  .argv
