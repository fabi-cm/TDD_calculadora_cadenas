import sumarCadena from "./sumador_cadena";

describe('Calculadora de cadena', () => {
    it('Toma en cuenta la cadena vacía: Para una cadena “” -> 0', () =>{
        expect(sumarCadena('')).toEqual(0);
    }); 

});
