const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  ano: Number
});

module.exports = mongoose.model('Livro', livroSchema);
