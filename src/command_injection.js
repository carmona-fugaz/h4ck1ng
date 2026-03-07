const { exec } = require("child_process");

function runCommand(userInput) {
  exec("ls " + userInput, (error, stdout, stderr) => {
    console.log(stdout);
  });
}