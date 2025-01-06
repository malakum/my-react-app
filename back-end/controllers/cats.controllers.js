const { selectCatById } = require( '../models/cats.models');

exports.getCatById = (req, res) => {
    const { catId } = req.params;
    selectCatById(catId).then((cat) => {
        res.status(200).send({ cat });
      });
  };

