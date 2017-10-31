const router = require('express').Router();

const controller = require('../../controllers/rasp');

router.get('/info', controller.info);
router.get('/reboot', controller.reboot);
router.get('/shutdown', controller.shutdown);

module.exports = router;
