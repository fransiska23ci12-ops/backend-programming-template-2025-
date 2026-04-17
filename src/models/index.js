const mongoose = require('mongoose');

const Gacha = require('./gacha');

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB error:", err);
    process.exit(1);
  }
};

connect();

// import model
const Books = require('./books');

module.exports = {
  mongoose,
  Books,
  Gacha,
};