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
catalogRouter.route('/:parmid')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the catalogs: ${req.params.parmid} to you`);
})

.post( (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /catalogs/${req.params.parmid}`);
})

.put( (req, res) => {
    res.write(`Updating the catalog: ${req.params.parmid}\n`);
    res.end(`Will update the catalog name: ${req.body.name}, price: ${req.body.price}
        and  description: ${req.body.description}`);
})

.delete((req, res) => {
    res.end(`Deleting catalog: ${req.params.parmid}`);
});

module.exports =catalogRouter; 