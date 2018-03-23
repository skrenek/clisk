const prompt = require('prompt');
const childProc = require('child_process');

prompt.start();

console.log(`1) Add a user
q) Quit

Enter an option:`);

prompt.get(['choice'], (err, result) => {
  switch (result.choice) {
    case '1':
      prompt.get(['username'], (err, ur) => {
        childProc.execSync(`sudo useradd -G sudo,ubuntu,dev,ssh -m -s /bin/bash ${username}`);
        childProc.execSync(`sudo ln -s /data /home/${username}/data`);
      });
      break;
    default:
      process.exit(0);
  }
});

process.on('exit', (code) => {
  console.log('. Done .');
})