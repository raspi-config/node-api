const express = require('express')
  , router = express.Router();

const commands = require('../../raspbian');

const reboot = async (req, res) => {
  res.json(await commands.general.reboot());
};

const shutdown = async (req, res) => {
  res.json(await commands.general.shutdown());
};

router.get('/reboot', reboot);
router.get('/shutdown', shutdown);

module.exports = router;
