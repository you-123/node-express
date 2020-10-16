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

module.exports =userRouter; 