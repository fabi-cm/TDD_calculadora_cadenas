function sumarCadena(cadena) {
  let suma = 0;
  if (cadena != "") {
    let listaNumeros = separadorCadena(cadena,",");
    for (let i = 0; i < listaNumeros.length ; i++){
        suma +=parseInt(listaNumeros[i]);
    }
  }
  return suma;
}

function separadorCadena(cadena,iterador){
    let listaNumeros = cadena.split(iterador)
    return listaNumeros
}

export default sumarCadena;
