const router = require('express').Router();

router.get('/', (req, res) => {
  const apiUrl = 'http://127.0.0.1/api/v1/';

  res.json({
    'apiUrl': apiUrl,
    'endpoints': {
    }
  });
});

router.use('/pages', require('./pages/index'));

router.use('/rasp', require('./rasp'));
router.use('/wifi', require('./wifi'));

module.exports = router;

