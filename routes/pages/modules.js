const express = require('express')
  , router = express.Router();


/* Routes */

const get = async (req, res) => {
  res.json([
    {
      id: 1,
      module: 'mosquitto',
      name: 'Mosquitto',
      status: 0,
      boot: 1
    },
    {
      id: 2,
      module: 'mariadb',
      name: 'MariaDB Server',
      status: 1,
      boot: 0
    }
  ]);
};

router.get('/', get);

module.exports = router;
