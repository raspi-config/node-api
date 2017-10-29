const raspbian = require('../base');

const commands = {
  'reboot': "sudo reboot",
  'shutdown': "sudo shutdown -h now",
};

async function reboot() {
  const result = await raspbian.execute(commands.reboot);

  if (result.error) {
    result.error_message = 'Permissão Negada!';
    return result;
  }
  result.message = 'Reiniciando...';

  return result
}

async function shutdown() {
  const result = await raspbian.execute(commands.shutdown);

  if (result.error) {
    result.error_message = 'Permissão Negada!';
    return result;
  }
  result.message = 'Desligando...';

  return result
}



module.exports = {
  reboot,
  shutdown
};
