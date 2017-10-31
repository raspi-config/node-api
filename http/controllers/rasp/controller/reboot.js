const commands = require('../../../../raspbian/index');

const method = async (req, res) => {
  res.json(await commands.general.reboot());
};

module.exports = method;
