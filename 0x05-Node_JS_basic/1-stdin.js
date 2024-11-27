process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const input = process.stdin.read();

  if (input) {
    process.stdout.write(`Your name is: ${input}`);
  }
});

// Handle EOF (end of file) for graceful exit
process.on('end', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});
