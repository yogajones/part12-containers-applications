const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')

/* GET statistics data. */
router.get('/', async (req, res) => {
  const count = await redis.getAsync('addedTodos');
  const addedTodos = count ? Number(count) : 0;

  res.send({
    "added_todos": addedTodos
  });
});

module.exports = router;
