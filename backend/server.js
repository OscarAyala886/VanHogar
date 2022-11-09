//const express = require('express');
//const cors = require('cors');
//const data = require('./data.js');
import express from 'express';
import cors from 'cors';
import data from './data';

const app = express();

//Le doy la direccion para que se aparescan los productos
app.use(cors());
app.get('/api/products', (req, res) => {
    res.send(data.products);
});

//Escuchara por el puerto 5000
app.listen(5000, ()=>{
    console.log('El server escucha por el puerto http://localhost:5000')
});