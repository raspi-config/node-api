const util = require('util');
const exec = util.promisify(require('child_process').exec);
const helper = require('./helpers');

/* Commands */
const commands = {
  'reboot': "sudo /sbin/reboot",
  'shutdown': "sudo /sbin/shutdown -h now"
};

async function execute(command) {
  const {stdout} = await exec(command);

  return helper.trimString(stdout);
}
