// Dados do faturamento por estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o faturamento total
const faturamentoTotal = Object.values(faturamento).reduce((soma, valor) => soma + valor, 0);

// Calcula o percentual de cada estado
const percentuais = Object.entries(faturamento).map(([estado, valor]) => {
    const percentual = (valor / faturamentoTotal) * 100;
    return { estado, percentual: percentual.toFixed(2) };
});

// Exibe os resultados
console.log('Percentual de representação por estado:');
percentuais.forEach(({ estado, percentual }) => {
    console.log(`${estado}: ${percentual}%`);
});
