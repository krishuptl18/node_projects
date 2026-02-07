const express = require("express");
const router = express.Router();

const movieController = require("./Controller/movieController");

// Routes
router.post("/creatmovies/add", movieController.addMovie);
router.get("/getmovies", movieController.getAllMovies);
router.get("/singlegetmovies/:id", movieController.getMovieById);
router.put("/movies/update/:id", movieController.updateMovie);
router.delete("/movies/delete/:id", movieController.deleteMovie);

module.exports = router;
