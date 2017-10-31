const raspbian = require('../../raspbian/commands/base');

const apply = async () => {
  await raspbian.execute('sudo cp /raspi-config/conf/wpa_supplicant.conf /etc/wpa_supplicant/wpa_supplicant.conf');
  await raspbian.execute('sudo wpa_cli reconfigure');

  return {
    message: 'Configuração aplicada com sucesso!'
  };
};

module.exports = apply;
