const { Gacha } = require('../../../models');
async function countUserToday(userId) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return Gacha.countDocuments({
    userId,
    createdAt: { $gte: today }
  });
}

async function countPrize(prize) {
  return Gacha.countDocuments({ prize });
}

async function createGacha(data) {
  return Gacha.create(data);
}

async function getHistoryByUser(userId) {
  return Gacha.find({ userId }).sort({ createdAt: -1 });
}

module.exports = {
  countUserToday,
  countPrize,
  createGacha,
  getHistoryByUser,
};
