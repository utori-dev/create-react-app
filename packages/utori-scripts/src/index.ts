#!/usr/bin/env node

import yargs from 'yargs';
import build from './commands/build';
import lint from './commands/lint';
import start from './commands/start';
import test from './commands/test';
import config from './options/config';
import outputDirectory from './options/outputDirectory';
import projectType from './options/projectType';
import sourceDirectory from './options/sourceDirectory';

// Was getting some errors about `scriptName` and such being undefined.
// Tried a bunch of things, but this was all that worked.
(require('yargs') as typeof yargs)
  .scriptName('utori-scripts')
  .usage('$0 <cmd> [args]')
  .option('config', config)
  .option('projectType', projectType)
  .option('outputDirectory', outputDirectory)
  .option('sourceDirectory', sourceDirectory)
  .command(build)
  .command(lint)
  .command(start)
  .command(test)
  .strictCommands(true)
  .demandCommand(1, 'You must specify at least one command')
  .help()
  .argv
