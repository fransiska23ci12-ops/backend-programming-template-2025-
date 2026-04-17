const mongoose = require('mongoose');

const gachaSchema = new mongoose.Schema({
  user: String,
  reward: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Gacha', gachaSchema);
