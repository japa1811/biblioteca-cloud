const express = require('express');
const livrosController = require('../controller/livrosController');

const router = express.Router();

router.get('/pesquisa', livrosController.pesquisar);

module.exports = router;