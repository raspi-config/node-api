const service = require('../../../../services/wifi');

const method = async (req, res) => {
  const {ssid, password} = req.body;

  res.json(await service.save(ssid, password));
};

module.exports = method;
