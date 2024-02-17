const express = require('express');
const router = express.Router();
const {
  getAllInitiatives,
  createInitiative,
  updateInitiative,
  deleteInitiative,
} = require('../controllers/initiativeController');
router.get('/', getAllInitiatives, (req, res) => {
  return res.status(200).json(res.locals.all);
});
router.post('/', createInitiative, (req, res) => {
  return res.status(200).json(res.locals.newInitiative);
});
router.patch('/', updateInitiative, (req, res) => {
  return res.status(200).json(res.locals.updated);
});
router.delete('/:id', deleteInitiative, (req, res) => {
  return res.sendStatus(200);
});
module.exports = router;
