// Desafio 11
function generatePhoneNumber(numeros) {
  let numeroDeTelefone = '(12) 34567-8910';
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numeros.length; numeros += 1) {
    if (numeros[index] > 9 || numeros[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    numeroDeTelefone = numeroDeTelefone.replace('1', numeros[index]);
  }
  return numeroDeTelefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangleForm = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB) - Math.abs(lineC)) {
    if (lineB < lineA + lineC && lineB > Math.abs(lineA) - Math.abs(lineC)) {
      if (lineC < lineA + lineB && lineC > Math.abs(lineA) - Math.abs(lineB)) {
        triangleForm = true;
      }
    }
  }
  return triangleForm;
}

// Desafio 13
function hydrate(string) {
  let reg = /\d+/g;
  let result = string.match(reg);
  let soma = 0;
  for(let index = 0; index < result.length; index += 1) {
    soma = soma + parseInt(result[index]);
  }
  if(soma === 1) {
    return `1 copo de água`
  }
  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
