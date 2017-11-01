const commands = require('../../../../raspbian/index');

const method = async (req, res) => {
  res.json({
    ssid: await commands.network.wifi.ssid(),
    link_quality: await commands.network.wifi.linkQuality(),
    ip: await commands.network.wifi.ip(),
  });
};

module.exports = method;
