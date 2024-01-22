const express = require('express');
const path = require('path');
const app = express();

const PORT = '8080';
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('/', (req, res) => {
  res.sendStatus(400);
});
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'An unknown error has occurred',
    message: { error: 'An Error has occurred' },
    status: 500,
  };
  const error = Object.assign(defaultError, err);
  console.log(error.log);
  return res.status(error.status).json(error.message);
});
app.listen(PORT, () => console.log(`listening on localhost ${PORT}`));
