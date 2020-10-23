//https://hub.packtpub.com/building-movie-api-express/
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const actors = require('./routers/actor');
const movies = require('./routers/movie');
const app = express();
const path = require('path');

app.listen(8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static(path.join(__dirname, "dist/week10")));

mongoose.connect('mongodb://localhost:27017/movies', function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');
});

//Configuring Endpoints
//Actor RESTFul endpoionts 
app.get('/actors', actors.getAll);
app.post('/actors', actors.createOne);
app.get('/actors/:id', actors.getOne);
app.put('/actors/:id', actors.updateOne);
app.post('/actors/:id/movies', actors.addMovie); 
app.delete('/actors/:id', actors.deleteOne);
    //lab code
app.delete('/actor/all/:id', actors.deleteActorAndMovies) //delete an actor and all of their movies
app.delete('/actors/:Mid/:Aid', actors.removeActorFromList); //remove an actor from list of actors in a movie
    //lab task
app.delete('/actor/:Aid', actors.removeMovies);
//movies in actor becomes empty
//remove all movies that an actor has participated in, but does not remove the actor

//Movie RESTFul  endpoints
app.get('/movies', movies.getAll);
app.post('/movies', movies.createOne);
app.get('/movies/:id', movies.getOne);
    //lab code
app.delete('/movies/:id', movies.deleteOne); //delete a movie by id
app.delete('/movies/:Aid/:Mid', movies.removeMovieFromList); //remove a movie from list of movies in an actor
app.post('/movies/:id/actors', movies.addActor); //Add an existing actor to the list of actors in a movie
app.get('/movies/:yr1/:yr2', movies.getBetweenYears); //Get movies between year 1 and year 2
app.delete('/movies', movies.deleteBetweenYears); //delete all movies produced between two years
