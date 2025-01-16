const stringOriginal = "Exemplo de string";

function inverterString(str) {
  let stringInvertida = '';
  
  // Percorre a string de trás para frente
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }
  
  return stringInvertida;
}

// Chama a função e exibe o resultado
const stringInvertida = inverterString(stringOriginal);
console.log('String original: ', stringOriginal);
console.log('String invertida: ', stringInvertida);
