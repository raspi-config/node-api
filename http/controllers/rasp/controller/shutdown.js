const commands = require('../../../../raspbian/index');

const method = async (req, res) => {
  res.json(await commands.general.shutdown());
};

module.exports = method;
