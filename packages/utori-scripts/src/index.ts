#!/usr/bin/env node

import YARGS from 'yargs';
import build from './commands/build';
import lint from './commands/lint';
import start from './commands/start';
import test from './commands/test';

(require('yargs') as typeof YARGS)
  .scriptName('utori-scripts')
  .usage('$0 <cmd> [args]')
  .command(build)
  .command(lint)
  .command(start)
  .command(test)
  .help()
  .argv