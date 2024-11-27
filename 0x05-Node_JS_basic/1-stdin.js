const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Welcome to Holberton School, what is your name?\n", function(name) {
  process.stdout.write(`Your name is: ${name}\n`); // Add a newline here for correct output formatting.
  rl.close();
});

// Handle EOF (end of file) for graceful exit
process.on('SIGINT', () => {
  process.stdout.write('This important software is now closing');
  process.exit(0);
});
