const router = require('express').Router();

const controller = require('../../controllers/wifi');

router.get('/scan', controller.scan);
router.post('/save', controller.save);
router.get('/apply', controller.apply);

module.exports = router;
