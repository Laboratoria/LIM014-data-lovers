export const filterData = (allCharacters, filterConfig) => {

  let result = [];
  if (filterConfig.status != "") {
    result = allCharacters.filter(character => character.status == filterConfig.status);// filter sirve para filtrar listas
  } else {
    result = allCharacters;
  }

  if (filterConfig.name != "") {
    result = result.filter(character => character.name.toLowerCase().includes(filterConfig.name.toLowerCase()));
  }

  if (filterConfig.species != "") {
    result = result.filter(character => character.species == filterConfig.species);
  }

  if (filterConfig.gender != "") {
    result = result.filter(character => character.gender == filterConfig.gender);
  }

  if (filterConfig.origin != "") {
    result = result.filter(character => character.origin.name == filterConfig.origin);
  }

  if (filterConfig.episode != "") {
    let result2 = [];
    result.forEach(item => { //result es la lista personajes, item es cada personaje
      item.episode.forEach(subItem => {//subItem es cada episodio de la lista episode
        let episode = subItem.slice(40, subItem.length);
        if (filterConfig.episode == episode) {
          result2.push(item);//push agregar a la lista result2 los item seleccionados
        }
      });
    });

    result = result2;
  }

  return result;
};

// Filtrado por orden A-Z/ Z-A
export const dataSort = (allCharacters, sortBy, sortOrder) => {
  //console.log("entre dibidubsdip");
  if (sortBy === "name" && sortOrder === "orderAtoZ") {
    return allCharacters.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      else if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
  }
  else if (sortBy === "name" && sortOrder === "orderZtoA") {
    return allCharacters.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      else if (a.name > b.name) {
        return -1;
      }
      return 0;
    })
  }

  else if (sortBy === "name" && sortOrder === "none") {
    return allCharacters.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      else if (a.id < b.id) {
        return -1;
      }
      return 0;
    })
  }

};
