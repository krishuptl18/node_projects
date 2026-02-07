const Movie = require("../Models/Movie");

// Add Movie
exports.addMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).json({
            message: "Movie added successfully 🎬",
            movie
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All Movies
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Movie By ID
exports.getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        res.json(movie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Movie
exports.updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json({
            message: "Movie updated successfully ✏️",
            movie
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete Movie
exports.deleteMovie = async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.json({ message: "Movie deleted successfully ❌" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
