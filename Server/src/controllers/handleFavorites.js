let myFavorites = [];

const getFav = (req, res) => {
  return res.status(200).send(myFavorites);
};
const postFav = (req, res) => {
  const character = req.body;

  myFavorites.push(character);

  return res.status(200).send(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  console.log(myFavorites);
  myFavorites = myFavorites.filter((char) => char.id !== parseInt(id));
  console.log(myFavorites);
  return res.status(200).send(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
  getFav,
};
