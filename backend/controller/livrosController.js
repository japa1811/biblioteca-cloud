const openLibraryService = require('../services/openLibraryService');

async function pesquisar(req, res) {
  const titulo = req.query.titulo;

  if (!titulo || titulo.trim().length < 2) {
    return res.status(400).json({
      mensagem: 'Informe um titulo com pelo menos 2 caracteres'
    });
  }

  try {
    const livros = await openLibraryService.buscarPorTitulo(titulo.trim());

    if (livros.length === 0) {
      return res.status(404).json({
        mensagem: 'Nenhum livro encontrado'
      });
    }

    return res.status(200).json({
      total: livros.length,
      livros: livros
    });
  } catch (erro) {
    console.log('Erro na pesquisa:', erro.message);
    return res.status(500).json({
      mensagem: 'Erro ao consultar a API externa'
    });
  }
}

module.exports = { pesquisar }; 