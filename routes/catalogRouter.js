const express = require('express');
const bodyParser = require('body-parser');

const catalogRouter = express.Router();

catalogRouter.use(bodyParser.json());

catalogRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the catalogs to you');
})
.post((req, res) => {
    res.end(`Will add the catalog: ${req.body.name},the price:${req.body.price} and with description: ${req.body.description} `);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /catalogs');
})
.delete((req, res) => {
    res.end('Deleting all catalogs');
});

module.exports =catalogRouter; 