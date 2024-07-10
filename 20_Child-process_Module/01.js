const { exec } = require('child_process');

const command = 'dir "D:\\exercise\\javascript-exercise\\.git\\logs\\refs\\remotes"';

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`Output:\n${stdout}`);
});
