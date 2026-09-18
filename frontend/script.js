const API_URL = 'http://localhost:3000/api/livros/pesquisa';

const formulario = document.getElementById('formPesquisa');
const campoTitulo = document.getElementById('titulo');
const mensagem = document.getElementById('mensagem');
const resultados = document.getElementById('resultados');

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault();

  const titulo = campoTitulo.value.trim();

  resultados.innerHTML = '';
  mensagem.textContent = 'Carregando...';

  if (titulo === '') {
    mensagem.textContent = 'Digite um titulo para pesquisar';
    return;
  }

  try {
    const resposta = await fetch(API_URL + '?titulo=' + encodeURIComponent(titulo));
    const dados = await resposta.json();

    if (resposta.status === 404) {
      mensagem.textContent = 'Nenhum livro encontrado';
      return;
    }

    if (!resposta.ok) {
      mensagem.textContent = dados.mensagem || 'Erro ao realizar a pesquisa';
      return;
    }

    mensagem.textContent = dados.total + ' resultado(s) encontrado(s)';
    console.log(dados.livros);
  } catch (erro) {
    mensagem.textContent = 'Nao foi possivel conectar ao servidor';
  }
});