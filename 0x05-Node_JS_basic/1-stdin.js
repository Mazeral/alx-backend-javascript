function userInput() {
  process.stdout.write("Welcome to Holberton School, what is your name?\n");
  process.stdin.on("data", function(input) {
    const text = input.toString().trim();
    process.stdout.write(`Your name is: ${text}\n`);
    process.exit();
  });
}

module.exports = userInput;
