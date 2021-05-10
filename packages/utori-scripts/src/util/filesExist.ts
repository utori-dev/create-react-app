import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import getPathStats from './getPathStats';

function filesExist(...filePaths: string[]): boolean {
  return !filePaths.find(filePath => {
    const stats = getPathStats(filePath);
    if (!stats) {
      console.log(chalk.red('Could not find a file.'));
      console.log(chalk.red('  Name: ') + chalk.cyan(path.basename(filePath)));
      console.log(chalk.red('  Located in: ') + chalk.cyan(path.dirname(filePath)));
      return true;
    } else if (!stats.isFile()) {
      console.log(chalk.red('Expected directory to be a file.'));
      console.log(chalk.red('  Name: ') + chalk.cyan(path.basename(filePath)));
      console.log(chalk.red('  Located in: ') + chalk.cyan(path.dirname(filePath)));
    }
    return true;
  });
}

export default filesExist;
