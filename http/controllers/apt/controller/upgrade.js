const commands = require('../../../../raspbian/index');

const method = async (req, res) => {
  res.json(await commands.apt.upgrade());
};

module.exports = method;
