// Solicita al usuario que elija entre la opción 1 o 2:

let opcion = prompt('Elija entre opcion 1 y opcion 2');

if (opcion == '1') {
  // Se le debe pedir dos número al usuario e indicar si son pares y múltiplos de 7 ambos, uno de ellos o ninguno.
  let num1 = parseInt(prompt('Entre número 1'));
  let num2 = parseInt(prompt('Entre número 2'));
  if (pares(num1, num2) && mul(num1, num2)) {
    alert('Son pares y multiplos de 7');
  } else if (pares(num1, num1) || pares(num2, num2)) {
    if (pares(num1, num2)) {
      alert('Ambos son pares');
    } else {
      alert('Uno de ellos es par');
    }
  } else if (mul(num1, num1) || mul(num2, num2)) {
    if (mul(num1, num2)) {
      alert('Ambos son multiplos de 7');
    } else {
      alert('Uno de ellos es multiplo de 7');
    }
  } else {
    alert('Ninguno es ni par ni multiplo de 7');
  }
} else if (opcion == '2') {
  let palabra = prompt('Introduce un palabra');
  compruebaA(palabra);

  // Se le debe pedir una palabra y comprobar si empieza o termina por a
}
function compruebaA(palabra) {
  if (palabra[0] == 'a' || palabra[0] == 'A') {
    alert('La palabra empieza con a');
  }
  if (
    palabra[palabra.length - 1] == 'a' ||
    palabra[palabra.length - 1] == 'A'
  ) {
    alert('La palabra termina con a');
  }
}

function pares(num1, num2) {
  if (!(num1 % 2) && !(num2 % 2)) {
    return true;
  } else {
    return false;
  }
}

function mul(num1, num2) {
  if (!(num1 % 7) && !(num2 % 7)) {
    return true;
  } else {
    return false;
  }
}
