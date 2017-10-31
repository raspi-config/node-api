const commands = require('../../../../raspbian/index');

const method = async (req, res) => {
  res.json(await commands.network.wifi.scan());
};

module.exports = method;
