const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}/${id}`);
    let character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
    };
    return character.name
      ? res.status(200).send(character)
      : res.status(404).send("Character not found");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getCharById,
};
