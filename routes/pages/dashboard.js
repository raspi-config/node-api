const express = require('express')
  , router = express.Router();

const util = require('util');
const exec = util.promisify(require('child_process').exec);

/* Functions */
const trimString = (string) => {
  return string.replace(/[\n\t\r]/g, "");
};

async function execute(command) {
  const {stdout} = await exec(command);

  return trimString(stdout);
}

async function getMemory() {
  const command = "free -m | awk '/Mem:/ { total=$2 } /Mem:/ { used=$3 } END { print used/total*1000}'";

  const result = await execute(command);

  return parseFloat(result).toFixed(2);
}

async function getNumCores() {
  const command = "grep -c ^processor /proc/cpuinfo";

  return await execute(command);
}

async function getCPULoad() {
  const command = "awk '{print $1}' /proc/loadavg";

  return await execute(command);
}

async function getCPU() {
  return Math.floor((await getCPULoad() * 100) / await getNumCores());
}

async function getTemperature() {
  const command = "cat /sys/class/thermal/thermal_zone0/temp";

  const result = await execute(command);

  return (parseFloat(result) / 1000).toFixed(2);
}

/* Routes */

const get = async (req, res) => {
  res.json({
    'memory': {
      'usage': await getMemory()
    },
    'cpu': {
      'num_cpus': await getNumCores(),
      'usage': await getCPU()
    },
    'temperature': await getTemperature()

  });
};

router.get('/', get);

module.exports = router;
