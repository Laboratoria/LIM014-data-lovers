 //FILTRADO POR ORDEN AZ-ZA
export const dataSort = (data, sortBy) => {
  switch (sortBy){
    case "az":
      return orderFunction(data).reverse()
    case "za":
      return orderFunction(data)
    default : 
    return data
  }
};
export const orderFunction = (data) =>{
  
    return data.sort((a, b)=> {
       if (a.name < b.name) {
         return 1;
       }
       if (a.name > b.name) {
         return -1;
       }
       return 0;
     })
   }


//FILTRADO POR ROLES

export const filterData = (data, roles) => {
  let newarray = [];
  for(let i = 0; i < data.length; i++){
    for (let a = 0; a < data[i].tags.length; a++){
      if(data[i].tags[a] === roles){
        newarray.push(data[i])
      } else if(roles === ""){
        return data
      }
      }
    }
    return newarray;
  };

//FILTRADO PARA BUSCADOR
  export const filterName = (data, name) => {
    return data.filter( nameFilter => nameFilter.id.includes(name))
    
  }

  //FILTRADDO PARA NIVELES DE DIFICULTAD

  export const filterLevel = (data, level) =>{
    switch (level) {
      case "facil" : 
      return data.filter(({info}) => info.difficulty <= 3);
      case "medio" :
        return data.filter(({info}) => info.difficulty >=4 && info.difficulty <=6);
      case "dificil":
        return data.filter(({info}) => info.difficulty > 6);
      default:
        return data;
    }
  };

 





