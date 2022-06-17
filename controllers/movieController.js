    const movies = require('../models/movieModel');
    movieController = {};

    movieController.getAll = (req, res) => {
        res.json(movies.findAll());
    };

    movieController.getById =(req, res) => {
        const {id} = req.params;
        res.json(movies.findById(id));
    };
    movieController.getByTitle = (req,res)=>{
        const {title} = req.params;
        res.json(movies.findByTitle(title));
    };
    movieController.getByYear = (req,res)=>{
        const {year} = req.params;
        res.json(movies.findByYear(year));
    };
    movieController.create = (req,res)=>{
        const {id,title,year} = req.body;
        const movie = {id,title,year};
        res.json(movies.post(movie));
    };
    movieController.update = (req,res)=>{
        const {id} = req.params;
        const {title, year} = req.body;
        let movie = {id, title, year};
        res.json(movies.update(movie));
    };

    movieController.delete = (req,res)=>{
        const {id} = req.params;
        res.json(movies.delete(id));
    };

    module.exports = movieController;