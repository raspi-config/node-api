const raspbian = require('../../raspbian/commands/base');

const apply = async () => {

  await raspbian.execute('sudo ifdown wlan0');
  await raspbian.execute('sudo cp /raspi-config/conf/wpa_supplicant.conf /etc/wpa_supplicant/wpa_supplicant.conf');
  await raspbian.execute('sudo ifup wlan0');

  return {
    message: 'Configuração aplicada com sucesso!'
  };
};

module.exports = apply;
