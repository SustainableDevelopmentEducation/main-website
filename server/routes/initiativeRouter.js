const express = require('express');
const router = express.Router();
const { getAllInitiatives, createInitiative} = require('../controllers/initiativeController');
router.get('/', getAllInitiatives, (req, res) => {
  console.log('initiativeRouter');
  return res.status(200).json(res.locals.all);
});
router.post('/', createInitiative, (req, res) => {
  return res.status(200).json(res.locals.newInitiative);
});
module.exports = router;
