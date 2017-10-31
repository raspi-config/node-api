const raspbian = require('../../raspbian/commands/base');

const save = async (ssid, password) => {
  const command = await raspbian.execute('cat /raspi-config/conf/template/wpa_supplicant.conf');
  let template = command.data;

  template = template.replace('SSID', ssid);
  template = template.replace('PSK', password);

  const fs = require('fs');
  await fs.writeFile("/raspi-config/conf/wpa_supplicant.conf", template, (err) => {
    if (err) {
      return console.log(err);
    }
  });

  return {
    message: 'Configuração salva com sucesso!'
  };
};

module.exports = save;
