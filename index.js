import readline from 'node:readline';
import { changeDirectory } from './changeDir.js';
import { setHomeDirectory } from './startFromHomeDir.js';


const userName = process.argv[2].split('=')[1];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(`Welcome! to the File Manager, ${userName}!`)
setHomeDirectory();
let currDir = process.cwd();
console.log(`You are currently in ${currDir}`);
rl.on('line', (input) => {
  if (input ==='.exit') {
    console.log(`Thank you for using File Manager, ${userName}!`);
    rl.close();
  }
  if (input === 'up') {
    changeDirectory('up');
  }

  if (input.startsWith('cd ')) {
    const whereTo = input.split(' ')[1];
    changeDirectory(whereTo);
  }
  let currDir = process.cwd();
  console.log(`You are currently in ${currDir}`);
});

rl.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${userName}!`);
  rl.close();
});
