// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(a, b) {
  return (a * b) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let espaco = ', ';
  let junto = array[array.length - 1].concat(espaco, array[0]);
  return junto;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties * 1;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  let contador = 0;
  for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
    if (maior === array[secondIndex]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayStrings = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayStrings.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      arrayStrings.push('buzz');
    } else if (array[index] % 3 === 0) {
      arrayStrings.push('fizz');
    } else {
      arrayStrings.push('bug!');
    }
  }
  return arrayStrings;
}

// Desafio 9
function encode(string) {
  let novaString = string;
  novaString = novaString.replace(/a/g, '1');
  novaString = novaString.replace(/e/g, '2');
  novaString = novaString.replace(/i/g, '3');
  novaString = novaString.replace(/o/g, '4');
  novaString = novaString.replace(/u/g, '5');
  return novaString;
}
function decode(string) {
  let novaString = string;
  novaString = novaString.replace(/1/g, 'a');
  novaString = novaString.replace(/2/g, 'e');
  novaString = novaString.replace(/3/g, 'i');
  novaString = novaString.replace(/4/g, 'o');
  novaString = novaString.replace(/5/g, 'u');
  return novaString;
}

// Desafio 10
function techList(tecnologias, nome) {
  let array = [];
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  let tecnologia = tecnologias.sort();

  for (let index = 0; index < tecnologias.length; index += 1) {
    array.push({
      tech: tecnologia[index],
      name: nome,
    });
  }
  return array;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
