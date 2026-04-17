const express = require('express');

module.exports = (app) => {
  const route = express.Router();
  app.use('/gacha', route);

  route.get('/roll', (req, res) => {

    const pool = [];

   
    pool.push(...Array(1).fill({ name: 'Emas 10 gram', rarity: 'SSR' }));
    pool.push(...Array(5).fill({ name: 'Smartphone X', rarity: 'SSR' }));
    pool.push(...Array(10).fill({ name: 'Smartwatch Y', rarity: 'SR' }));
    pool.push(...Array(100).fill({ name: 'Voucher Rp100.000', rarity: 'R' }));
    pool.push(...Array(500).fill({ name: 'Pulsa Rp50.000', rarity: 'R' }));

  
    const random = pool[Math.floor(Math.random() * pool.length)];

    res.json({
      message: 'Gacha result',
      data: random,
    });
  });
};
