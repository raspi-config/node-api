const service = require('../../../../services/wifi');

const method = async (req, res) => {
  res.json(await service.apply());
};

module.exports = method;
