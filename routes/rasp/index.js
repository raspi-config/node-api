const express = require('express')
  , router = express.Router();

/* Commands */
const commands = {
  'reboot': "sudo /sbin/reboot",
  'shutdown': "sudo /sbin/shutdown -h now"
};

/* Raspbian */
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const trimString = (string) => {
  return string.replace(/[\n\t\r]/g, "");
};

async function execute(command) {
  const {stdout} = await exec(command);

  return trimString(stdout);
}

const shutdown = (req, res) => {
  res.json({
    message: 'Desligando'
  });

  execute(commands.shutdown);
};

const reboot = (req, res) => {
  res.json({
    message: 'Reiniciando'
  });

  execute(commands.reboot);
};

router.get('/shutdown', shutdown);
router.get('/reboot', reboot);

module.exports = router;
