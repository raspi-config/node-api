const router = require('express').Router();

const commands = require('../../../../raspbian/index');
/* Routes */

const get = async (req, res) => {
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

router.get('/', get);

module.exports = router;
