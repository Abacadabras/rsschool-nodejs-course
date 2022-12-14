import readline from 'node:readline';


const userName = process.argv[2].split('=')[1];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Welcome to the File Manager, ${userName}!`);
rl.question('Do you like the Node.js? ', (answer) => {
  console.log(`Thank you, your answer is accepted: ${answer}`);
  rl.close();
});
