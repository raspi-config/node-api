const router = require('express').Router();

const controller = require('../../controllers/apt');

router.get('/update', controller.update);
router.get('/upgrade', controller.upgrade);

module.exports = router;
