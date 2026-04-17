const service = require('./gacha-service');

async function gacha(req, res, next) {
  try {
    const { userId } = req.body;

    const result = await service.gacha(userId);

    res.status(200).json({
      message: result ? 'Menang' : 'Tidak menang',
      prize: result,
    });
  } catch (err) {
    next(err);
  }
}


async function history(req, res, next) {
  try {
    const { userId } = req.params;

    const data = await service.getHistory(userId);

    res.status(200).json({
      message: 'History berhasil diambil',
      data,
    });
  } catch (err) {
    next(err);
  }
}


module.exports = {
  gacha,
  history,
};
