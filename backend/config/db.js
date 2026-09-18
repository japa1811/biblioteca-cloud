const mongoose = require('mongoose');

async function conectarBanco() {
  if (!process.env.MONGO_URI) {
    console.log('MONGO_URI nao configurada. Seguindo sem banco.');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado ao MongoDB');
  } catch (erro) {
    console.log('Erro ao conectar no MongoDB:', erro.message);
  }
}

module.exports = conectarBanco;