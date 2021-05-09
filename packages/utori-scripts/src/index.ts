#!/usr/bin/env node

import YARGS from 'yargs';

(require('yargs') as typeof YARGS)
  .scriptName('utori-scripts')
  .usage('$0 <cmd> [args]')
  .command('start [name]', 'welcome ter yargs!',
    (yargs) => {
      yargs.positional('name', {
        type: 'string',
        default: 'Cambi',
        describe: 'the name to say hello to'
      })
    },
    (argv) => {
      console.log('start', 'welcome to yargs!')
    },
  )
  .help()
  .argv