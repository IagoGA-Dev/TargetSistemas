const fs = require('fs');

// Lê o arquivo JSON
const dados = JSON.parse(fs.readFileSync('./dados.json', 'utf8'));

// Filtra os dias com faturamento válido (maior que zero)
const diasComFaturamento = dados.filter(dia => dia.valor > 0);

// Calcula o menor e o maior valor de faturamento
const menorValor = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorValor = Math.max(...diasComFaturamento.map(dia => dia.valor));

// Calcula a média mensal
const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;

// Conta o número de dias com faturamento acima da média
const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

// Exibe os resultados
console.log('Menor valor de faturamento: ', menorValor.toFixed(2));
console.log('Maior valor de faturamento: ', maiorValor.toFixed(2));
console.log('Número de dias com faturamento acima da média: ', diasAcimaDaMedia);
