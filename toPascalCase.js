// creiamo una funzione che prende un argomento e lo converte in PascalCase

function toPascalCase(testoDaConvertire) {
  // divido la stringa in un array di parole usando lo spazio come separatore
  const parole = testoDaConvertire.split(' ');


  for (let i = 0; i < parole.length; i++) {
    /**
     * @type {string}
     */
    const parola = parole[i];

    // prendo la prima lettera della parola e la rendo maiuscola
    const primaLettera = parola[0].toUpperCase();

    // prendo le altre e le converto in minuscolo
    const altreLettere = parola.substring(1).toLowerCase();

    // console.log(primaLettera, altreLettere);

    // unisco le due parti
    parole[i] = primaLettera + altreLettere;
  }

  // console.log(parole)

  // unisco le parole
  return parole.join('');
}

console.log(toPascalCase(process.argv[2]));
