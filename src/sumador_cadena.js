function sumarCadena(cadena) {
  let suma = 0;
  let listaSeparadores = new RegExp("[,-]");
  let listaNumeros = [];
  let regex = /\/\/(.*) (.*)/; /* Expresion regular */

  if (cadena === "") {
    return 0;
  } else if (cadena.startsWith("//")) {
    let separadorUsuario = cadena.match(regex);
    listaSeparadores = new RegExp(separadorUsuario[1], "g");
    cadena = separadorUsuario[2];
  }

  listaNumeros = separadorCadena(cadena, listaSeparadores);
  for (let i = 0; i < listaNumeros.length; i++) {
    suma += listaNumeros[i];
  }
  return suma;
}

function separadorCadena(cadena, listaSeparadores) {
  let listaNumeros = cadena.split(listaSeparadores).map(Number);
  return listaNumeros;
}

export default sumarCadena;
