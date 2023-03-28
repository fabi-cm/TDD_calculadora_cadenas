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
});
