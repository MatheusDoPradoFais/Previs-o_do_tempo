// WeatherFlow — script.js
// Nesta etapa, nenhuma API é chamada. Este arquivo apenas prepara os
// elementos e os "ganchos" que serão usados na integração futura com
// a API de clima (Open-Meteo).

document.addEventListener('DOMContentLoaded', () => {

  // Pesquisa de cidade
  const searchForm   = document.getElementById('search-form');
  const cityInput    = document.getElementById('city-input');
  const searchButton = document.getElementById('search-button');

  // Estados visuais
  const loadingState = document.getElementById('loading-state');
  const errorState    = document.getElementById('error-state');
  const errorMessage  = document.getElementById('error-message');

  // Última atualização
  const lastUpdatedTime = document.getElementById('last-updated-time');

  // TODO (próxima etapa):
  // 1. Ao enviar o formulário, usar cityInput.value para consultar a API de clima.
  // 2. Antes da requisição, mostrar o estado de carregamento:
  //      loadingState.hidden = false;
  //    E esconder o estado de erro, se estiver visível:
  //      errorState.hidden = true;
  // 3. Se a cidade não for encontrada ou a requisição falhar:
  //      loadingState.hidden = true;
  //      errorMessage.textContent = 'Cidade não encontrada. Verifique o nome digitado e tente novamente.';
  //      errorState.hidden = false;
  // 4. Se a requisição tiver sucesso:
  //      loadingState.hidden = true;
  //      atualizar os elementos da interface com os dados recebidos;
  //      lastUpdatedTime.textContent = <horário retornado pela API>;

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // A busca de fato (chamada à API) será implementada na próxima etapa.
  });

});
