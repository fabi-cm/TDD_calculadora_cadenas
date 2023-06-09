import sumarCadena from "./sumador_cadena";

describe("Calculadora de cadena", () => {
  it("Toma en cuenta la cadena vacía: Para una cadena “” -> 0", () => {
    expect(sumarCadena("")).toEqual(0);
  });
  it("Toma en cuenta cadena un solo número: Para una cadena “2” -> 2", () => {
    expect(sumarCadena("2")).toEqual(2);
  });
  it("Toma en cuenta cadena con dos números: Para una cadena “1,2” -> 3", () => {
    expect(sumarCadena("1,2")).toEqual(3);
  });
  it("Toma en cuenta cadena con varios números: Para una cadena “1,2,3” -> 6", () => {
    expect(sumarCadena("1,2,3")).toEqual(6);
  });
  it('Se puede usar el caracter guion(-) como separador: “1-2,3” -> 6', () => {
    expect(sumarCadena("1-2,3")).toEqual(6);
  });
  it('El usuario puede especificar el delimitador. Ejm: ";": “//[;] 6;7;4” -> 17', () =>{
    expect(sumarCadena("//[;] 6;7;4")).toEqual(17);
  });
  xit('Separadores por defecto mas el delimitador del usuario: “//[;] 6,3-2;1” -> 12', () =>{
    expect(sumarCadena("//[;] 6,3-2;1")).toEqual(12);
  });
  it('Números mayores a 1000 deberían ser ignorados. Por ejemplo: “2, 1001” -> 2', () =>{
    expect(sumarCadena("2, 1001")).toEqual(2);
  });
});
