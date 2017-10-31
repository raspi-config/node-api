const commands = require('../../../../raspbian/index');

const method = async (req, res) => {
  res.json({
    'temperature': await commands.hardware.getTemperature(),
    'uptime': await commands.hardware.getUptime(),
    'process': await commands.hardware.getProcesses(),
    'version': await commands.hardware.getVersion(),
    'kernel': await commands.hardware.getKernel(),
    'hostname': await commands.hardware.getHostname(),
    'memory': {
      'usage': await commands.hardware.getMemory(),
      'free': null
    },
    'cpu': {
      'cores': await commands.hardware.getNumCores(),
      'usage': await commands.hardware.getCPU()
    },
  });
};
module.exports = method;
