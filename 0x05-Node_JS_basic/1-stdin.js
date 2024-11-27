function userInput() {
  process.stdout.write("Welcome to Holberton School, what is your name?\n");
  process.stdin.on("data", function(data) {
    const input = data.toString().trim();
    process.stdout.write(`Your name is: ${input}\n`);
    process.exit();
  });
}

module.exports = userInput;
