process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Handle EOF (end of file) for graceful exit
process.on('end', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});
