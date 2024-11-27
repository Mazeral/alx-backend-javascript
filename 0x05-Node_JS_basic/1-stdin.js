const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name = null;
console.log('Welcome to Holberton School, what is your name?');

// If there's piped input, read it directly
if (!process.stdin.isTTY) {
  process.stdin.on('data', (input) => {
    name = input.toString().trim();
    console.log(`Your name is: ${name}`);
    process.exit(0);
  });
} else {
  // If it's interactive input, ask for the name
  rl.on('line', (input) => {
    name = input.trim();
    console.log(`Your name is: ${name}`);
    rl.close(); // Close the readline interface
  });
}

// Handle EOF (end of file) for graceful exit
process.on('SIGINT', () => {
  process.exit(0);
});
