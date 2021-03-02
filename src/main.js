
import {dataSort, filterLevel, filterData, filterName} from './data.js';
import data from './data/lol/lol.js';

 //Object.entries y Object.values obtengo los mismos valores
const players = Object.values(data.data); //Array con todos los elementos

const showCards = (data) => {
    const containCards = document.getElementById('containCards');
    containCards.innerHTML = '';
    //element es cada uno de los elementos de array, el array es players.
    const principalFunction = (element) => {
       
        const card = document.createElement("div");
        card.innerHTML = `<button class="imageB" ><img class="imgPlayers" alt="${element.name}" src= "${element.splash}"></button>
        <div class="namePlayers"<p> ${element.name.toUpperCase()} </p></div>`
     
        card.className = "cardsPlayers"
        document.getElementById("containCards").appendChild(card)
          
        };

    data.forEach(principalFunction);

}
//Cuando ejecute la funcion showCard, data toma el valor de players, y le paso el array de objeto como parametro para que pinte las cartas
showCards(players);

//ORDENAR ZA Y AZ
const selectOrden = document.getElementById("selectOrden");
selectOrden.addEventListener("change", () => {
    const sortingAZ = dataSort(players, selectOrden.value)
    showCards(sortingAZ);    
})

//ORDENAR 
const playersLevel = document.getElementById("playersLevel");
playersLevel.addEventListener("change", () => {
    const filtering = filterLevel(players, playersLevel.value)
    showCards(filtering);    
})


const roleSelector = document.getElementById("roleSelector");
roleSelector.addEventListener("change", () => {
    const byTagsName = filterData(players, roleSelector.value)
    showCards(byTagsName);
})

const filterSearch = document.getElementById("searchOne");
filterSearch.addEventListener("change", () => {
    let nameFilter = filterName(players, filterSearch.value)
    showCards(nameFilter); 
}); 


//  Funcion para crear las opciones del datalist
let datalistSearch = document.getElementById("search");
    const optionName = Object.keys(data.data);
    console.log(optionName);
    
    optionName.map(function(data){
        let optionSearch = document.createElement("option")
        optionSearch.value = data;
        datalistSearch.appendChild(optionSearch);
});
