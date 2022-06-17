let db = require('../db');
MovieModel = {};
MovieModel.findAll = () => db;
MovieModel.findById = (id) => db.find(movie => movie.id == id);

MovieModel.findByTitle = (title) => db.find(movie => movie.title == title);
MovieModel.findByYear = (year) => db.find(movie => movie.year == year);

MovieModel.post = (newMovie) => {
    //let movies = db.filter(movie => movie.id != newMovie.id);
    db.push(newMovie);
    return newMovie;
}
MovieModel.update = (newMovie) => {
    let movies = db.filter(movie => movie.id != newMovie.id);
    movies.push(newMovie);
    db = movies;
    return newMovie;
}
MovieModel.delete = (id) => {
    let movies = db.filter(movie => movie.id != id);
    db = movies;
    return `Registro ${id} eliminado correctamente`;
}
module.exports = MovieModel;