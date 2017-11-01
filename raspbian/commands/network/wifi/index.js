const raspbian = require('../../base');

const commands = {
  'scan': "sudo iwlist wlan0 scan | grep 'ESSID' | sed -r 's/\\s+ //g' | cut -d':' -f2 | tr -d '\"\' | tr '\\n' '@'",
  'ssid': "sudo iwgetid -r | tr -d '\\n'",
  'link_quality': "iwconfig wlan0 | grep 'Link Quality' | sed -r 's/\\/s+ //g' | cut -d'=' -f2 | cut -d' ' -f1 | tr -d '\\n'",
  'ip': "ifconfig wlan0 | sed -n '2 p' | awk '{print $2}' | tr -d '\\n'"
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

async function ssid() {
  const results = await raspbian.execute(commands.ssid);

  return results.data;
}

async function linkQuality() {
  const results = await raspbian.execute(commands.link_quality);

  return results.data;
}

async function ip() {
  const results = await raspbian.execute(commands.ip);

  return results.data;
}

module.exports = {
  scan,
  ssid,
  linkQuality,
  ip
};
