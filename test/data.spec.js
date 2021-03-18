import {
  filterPokemonsByType,
  // filterPokemonByWeakness,
  // filterPokemonByResistant,
  // sortData,
  // top10PokemonByCp,
  // searchPokemonByName,
} from "../src/data.js";

describe("filter pokemons by types", () => {
  it("is a function", () => {
    expect(typeof filterPokemonsByType).toBe("function");
  });
  // Prueba de datos por tipo de dato 

  // it("This function return all data",()=>{
  //   const data = [
  //     { nombre:"pikachu", type:"electric"},
  //     { nombre:"ivysaur", type:"grass"},
  //     {nombre:"venusaur", type:"poison"}
  //   ]

  //   const result = [
  //     { nombre:"pikachu", type:"electric"},
  //     { nombre:"ivysaur", type:"grass"},
  //     { nombre:"venusaur", type:"poison"}
  //   ]
  //   expect(filterPokemonsByType("all", data)).toEqual(result)
  // })
  
});

// describe("anotherExample", () => {
//   it("is a function", () => {
//     expect(typeof anotherExample).toBe("function");
//   });

//   it("returns `anotherExample`", () => {
//     expect(anotherExample()).toBe("OMG");
//   });
// });
