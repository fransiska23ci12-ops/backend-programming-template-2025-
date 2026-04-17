const express = require('express');

module.exports = (app) => {
  const route = express.Router();

  route.get('/', (req, res) => {
    const items = [
      { name: "Karakter SSR", rarity: "SSR" },
      { name: "Karakter SR", rarity: "SR" },
      { name: "Karakter R", rarity: "R" }
    ];

    const randomIndex = Math.floor(Math.random() * items.length);
    const result = items[randomIndex];

    res.json({
      message: "Gacha result",
      data: result
    });
  });

  app.use('/gacha', route);
};