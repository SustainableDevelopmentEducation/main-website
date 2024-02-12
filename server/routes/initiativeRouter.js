const express = require('express');
const initiativeRouter = express();
const router = express.Router();

router.get('/', (req, res) => {
  console.log('initiativeRouter');
  return res.json('get request successful from initiative');
});

module.exports = router;
