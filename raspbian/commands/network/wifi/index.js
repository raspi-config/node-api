const raspbian = require('../../base');

const commands = {
  'scan': "sudo iwlist wlan0 scan | grep 'ESSID' | sed -r 's/\\s+ //g' | cut -d':' -f2 | tr -d '\"\' | tr '\\n' '@'",
};

async function scan() {
  const results = await raspbian.execute(commands.scan);

  if (results.error) {
    results.error_message = 'Permissão Negada!';
    return results;
  }

  const splitedNetworks = results.data.split('@');
  const networks = [];

  splitedNetworks.forEach((network) => {
    if (network === '') return;

    const ssid = {'ssid': network};
    networks.push(ssid);
  });

  results.data = networks;

  return results;
}

async function save(ssid, password) {
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

  await raspbian.execute('sudo cp /raspi-config/conf/wpa_supplicant.conf /etc/wpa_supplicant/wpa_supplicant.conf');
  await raspbian.execute('sudo wpa_cli reconfigure');

  return 'ok';
}

module.exports = {
  scan,
  save
};
