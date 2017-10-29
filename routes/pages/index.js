const express = require('express')
  , router = express.Router();

router.use('/dashboard', require('./dashboard'));
router.use('/modules', require('./modules'));
router.use('/wireless', require('./wireless'));

module.exports = router;
