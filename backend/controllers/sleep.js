const { Sleep } = require('../models');

module.exports = {
  create(req, res) {
    const { body } = req;
    if (!body) {
      return res.status(400).send({
        message: 'Oops! Something went wrong',
        code: 'T001',
      });
    }

    console.log("body...", body);


    return Sleep.create({
      startAt: body.startAt,
      endAt: body.endAt,
      createdAt: body.createdAt
    })
      .then((sleep) => {
        res.status(200).send(sleep);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  get(req, res) {
    return Sleep.findAll()
      .then((sleep) => {
        res.status(200).send(sleep);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },
}