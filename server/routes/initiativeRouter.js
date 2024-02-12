const express = require('express');
const router = express.Router();
const { getAllInitiatives } = require('../controllers/initiativeController');

router.get('/', getAllInitiatives,(req, res) => {
  console.log('initiativeRouter');
  return res.status(200).json(res.locals.all);
});

module.exports = router;
