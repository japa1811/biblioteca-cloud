const URL_BASE = 'https://openlibrary.org/search.json';

async function buscarPorTitulo(titulo) {
  const url = URL_BASE + '?title=' + encodeURIComponent(titulo) + '&limit=10';

  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new Error('Falha ao consultar a Open Library');
  }

  const dados = await resposta.json();
  const documentos = dados.docs || [];

  return documentos.map((item) => {
    return {
      titulo: item.title || 'Titulo nao informado',
      autor: item.author_name ? item.author_name[0] : 'Autor desconhecido',
      ano: item.first_publish_year || 'Ano nao informado'
    };

    
  });
  async function buscarPorTitulo(titulo, idioma) {
  let url = URL_BASE + '?title=' + encodeURIComponent(titulo) + '&limit=10';

  if (idioma) {
    url += '&q=language:' + idioma;
  }

  const resposta = await fetch(url);

}}

module.exports = { buscarPorTitulo };