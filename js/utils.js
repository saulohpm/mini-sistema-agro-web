// ============================
// Conversão e Validação de Datas
// ============================

function converterData(dataStr) {
  // Converte o "dd/mm/aaaa" para objeto Date
  return new Date(dataStr.split("/").reverse().join("-"));
}

function validarFormatoData(dataStr) {
  // Testa o formato em "dd/mm/aaaa", Retorna True ou False
  const formato = /^\d{2}\/\d{2}\/\d{4}$/;
  return formato.test(dataStr);
}

function validarOrdemDatas(dataInicio, dataFim) {
  // Valida as datas, caso a afirmação abaixo seja verdadeira ou falsa, retorna valor booleano
  return dataInicio < dataFim;
}


// ============================
// LocalStorage
// ============================

function salvarDados(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
}

function carregarDados(chave) {
  return JSON.parse(localStorage.getItem(chave)) || [];
}


// ============================
// Seleção de Radio Buttons
// ============================

function obterIndexSelecionado(nomeRadio) {
  const radios = document.getElementsByName(nomeRadio);

  // Percorre todos os radios com o mesmo name.
  // Quando encontra o que está marcado (checked),
  // retorna o value convertido para número.
  // Esse value representa o índice da plantação no array.
  for (let radio of radios) {
    if (radio.checked) {
      return parseInt(radio.value);
    }
  }

  // Se nenhum radio estiver selecionado, retorna -1
  return -1;
}



// ============================
// Cálculo de Diferença em Dias
// ============================

function diferencaEmDias(data1, data2) {
  const umDia = 1000 * 60 * 60 * 24;

  data1.setHours(0, 0, 0, 0);
  data2.setHours(0, 0, 0, 0);

  return Math.round((data2 - data1) / umDia);
}