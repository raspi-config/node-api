const raspbian = require('../base');

const helper = require('../helpers');

const commands = {
  'memory_ram_usage': "free -m | awk '/Mem:/ { total=$2 } /Mem:/ { used=$3 } END { print used/total*1000}'",
  'cpu_num_cores': "grep -c ^processor /proc/cpuinfo",
  'cpu_load': "awk '{print $1}' /proc/loadavg",
  'temperature': "cat /sys/class/thermal/thermal_zone0/temp",
  'process': "ps -aux | wc -l",
  'uptime': "uptime",
  'version': "cat /etc/os-release | grep PRETTY_NAME | cut -d'=' -f2 | tr -d '\"\'",
  'kernel': "uname -r",
  'hostname': "hostname"
};

async function getTemperature() {
  const result = await raspbian.execute(commands.temperature);

  return (parseFloat(result.data) / 1000).toFixed(2);
}

async function getMemory() {
  const result = await raspbian.execute(commands.memory_ram_usage);

  return parseFloat(result.data).toFixed(2);
}

async function getProcesses() {
  const result = await raspbian.execute(commands.process);

  return helper.trimString(result.data);
}

async function getUptime() {
  const result = await raspbian.execute(commands.uptime);

  return helper.trimString(result.data);
}

async function getVersion() {
  const result = await raspbian.execute(commands.version);

  return helper.trimString(result.data);
}

async function getKernel() {
  const result = await raspbian.execute(commands.kernel);

  return helper.trimString(result.data);
}

async function getHostname() {
  const result = await raspbian.execute(commands.hostname);

  return helper.trimString(result.data);
}

async function getNumCores() {
  const result = await raspbian.execute(commands.cpu_num_cores);

  return helper.trimString(result.data);
}

async function getCPULoad() {
  const result = await raspbian.execute(commands.cpu_load);

  return result.data;
}

async function getCPU() {
  const cpu = await Math.floor((await getCPULoad() * 100) / await getNumCores());

  return cpu
}

module.exports = {
  getTemperature,
  getMemory,
  getProcesses,
  getVersion,
  getKernel,
  getUptime,
  getHostname,
  getNumCores,
  getCPU,
};
