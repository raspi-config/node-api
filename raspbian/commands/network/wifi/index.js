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

module.exports = {
  scan
};
