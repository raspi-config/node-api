const router = require('express').Router();

router.use('/dashboard', require('./dashboard/dashboard'));
router.use('/modules', require('./modules/modules'));

module.exports = router;
