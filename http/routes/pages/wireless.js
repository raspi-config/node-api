const router = require('express').Router();

const commands = require('../../../raspbian/index');

const getListWifi = async (req, res) => {
  res.json(await commands.network.wifi.scan());
};

const save = async (req, res) => {
  const {ssid, password} = req.body;

  res.json(await commands.network.wifi.save(ssid, password));
};

router.get('/', getListWifi);
router.post('/save', save);

module.exports = router;
