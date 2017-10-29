const router = require('express').Router();

router.get('/', (req, res) => {
  const apiUrl = 'http://127.0.0.1/api/v1/';

  res.json({
    'apiUrl': apiUrl,
    'endpoints': {
      'pages': `${apiUrl}/pages`,
      'rasp': `${apiUrl}/rasp`,
    }
  });
});

router.use('/pages', require('./pages'));
router.use('/rasp', require('./rasp'));

module.exports = router;

