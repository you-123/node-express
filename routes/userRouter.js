const express = require('express');
const bodyParser = require('body-parser');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the users to you');
})
.post((req, res) => {
    res.end(`Will add the user: ${req.body.name},the user-detail:${req.body.detail} and user-status: ${req.body.status} `);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users');
})
.delete((req, res) => {
    res.end('Deleting all users');
});
userRouter.route('/:parmid')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the users: ${req.params.parmid} to you`);
})

.post( (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /users/${req.params.parmid}`);
})

.put( (req, res) => {
    res.write(`Updating the user: ${req.params.parmid}\n`);
    res.end(`Will update the user name: ${req.body.name},the user-detail:${req.body.detail} and user-status: ${req.body.status}`);
})

.delete((req, res) => {
    res.end(`Deleting user: ${req.params.parmid}`);
});
module.exports =userRouter; 