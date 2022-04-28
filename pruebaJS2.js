//Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta.
let frase = prompt('Introduzca una frase');

function contarPalabras(frase) {
  let contador = 1;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] == ' ') {
      contador++;
    }
  }
  return contador;
}
alert(`La frase tiene ${contarPalabras(frase)} palabras`);
