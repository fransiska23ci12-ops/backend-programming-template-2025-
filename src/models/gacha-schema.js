module.exports = (db) =>
  db.model(
    'Gacha',
    db.Schema({
      userId: String,
      prize: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    })
  );