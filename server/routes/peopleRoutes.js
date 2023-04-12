const express = require('express');
const swapi = require('swapi-node');
const router = express.Router();

router.get('/')
// create a git route with a colon for paramaters on each person