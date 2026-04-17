const repo = require('./gacha-repository');
const { prizes } = require('./gacha-constant');

async function gacha(userId) {
  const total = await repo.countUserToday(userId);
  if (total >= 5) {
    const { errorResponder, errorTypes } = require('../../../core/errors');

    throw errorResponder(
      errorTypes.VALIDATION,
      "Limit gacha harian habis"
    );
  }

  let available = [];

  for (let p of prizes) {
    const count = await repo.countPrize(p.name);
    if (count < p.quota) {
      available.push(p);
    }
  }

  let win = null;

  if (Math.random() < 0.5 && available.length > 0) {
    const index = Math.floor(Math.random() * available.length);
    win = available[index].name;
  }

  await repo.createGacha({
    userId,
    prize: win,
  });

  return win;
}

// ⬇️ TAMBAH INI
async function getHistory(userId) {
  return repo.getHistoryByUser(userId);
}

// ⬇️ UBAH INI
module.exports = {
  gacha,
  getHistory,
};