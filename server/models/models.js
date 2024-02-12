const mongoose = require('mongoose');
const { Schema } = mongoose;
require('dotenv').config();
const URI = process.env.MONGO_DB;

mongoose.connect(URI);
mongoose.connection.once('open', () => console.log('Connected to Database'));

const initiativeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  brief: { type: String, required: true },
  tags: { type: Array, required: true },
  created_at: { type: Date, default: Date.now },
});

const Initiative = mongoose.model('Initiative', initiativeSchema);

module.exports = { Initiative, URI };
