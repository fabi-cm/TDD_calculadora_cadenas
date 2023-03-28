function sumarCadena(cadena) {
  let suma = 0;
  let delimitadores = new RegExp('[,-]');
  let listaNumeros = [];
  if (cadena != "") {
    listaNumeros = separadorCadena(cadena,delimitadores);
    for (let i = 0; i < listaNumeros.length ; i++){
        /* suma +=parseInt(listaNumeros[i]); */
        suma += listaNumeros[i];
    }
  }
  return suma;
}

function separadorCadena(cadena,lista_iterador){
    let listaNumeros = cadena.split(lista_iterador).map(Number);
    return listaNumeros
}

export default sumarCadena;
