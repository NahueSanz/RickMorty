const express = require("express");
const router = express.Router();
const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const {
  postFav,
  deleteFav,
  getFav,
} = require("../controllers/handleFavorites");

router.get("/character/:id", getCharById);
router.get("/login", login);
router.get("/fav", getFav);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
