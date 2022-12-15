import readline from 'node:readline';


const userName = process.argv[2].split('=')[1];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Welcome to the File Manager, ${userName}!`);
rl.on('line', (input) => {
  if (input === '.exit') {
    console.log(`Thank you for using File Manager, ${userName}!`);
    rl.close();
  }
});

rl.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${userName}!`);
  rl.close();
});
