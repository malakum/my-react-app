const express = require('express');
const app = express();
//const fs = require('fs');


const { getCatById } = require( './controllers/cats.controllers');

const { getApiHealthCheck } = require('./controllers/api.controllers');
const { getParks } = require('./controllers/parks.controllers');
const { getRideById, postRideByParkId } = require('./controllers/rides.controllers');

app.use(express.json());



app.get('/api/healthcheck', getApiHealthCheck);

app.get('/api/parks',getParks);

app.get('/api/ride/:ride_id', getRideById);

app.post('/api/parks/:park_id/rides', postRideByParkId);



