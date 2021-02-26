
import {filterData, dataSort, filterLevel, filterName} from './data.js';
import data from './data/lol/lol.js';

let orden = document.querySelector(".orden");
let rolesSelector = document.querySelector(".selector");
let level = document.querySelector(".levelPlayers");
let nameSearch = document.getElementById("searchOne");

//Este player es para traer la data
const players = Object.entries(data.data);


// Plasmar las cards en la pagina web
const paintModal = element => {
    const card = document.createElement("div")
    card.innerHTML = `<button class="imageB" widht=130 ><img class="imgPlayers" alt="${element[1].name}" src= "${element[1].splash}"></button>
    <div class="namePlayers"<p> ${element[1].name.toUpperCase()} </p></div>`
/* `<button class="imagenB" ><img width=300  class="imgPlayers" alt="${element[1].name}" src= "${element[1].splash}"></button>
    <div class="namePlayers"<p> ${element[1].name.toUpperCase()} </p></div>` */
    card.className = "cardsPlayers"
    document.getElementById("containCards").appendChild(card)
    card.addEventListener("click" ,() => {
        let open = document.querySelector(".modal");
        let openContain = document.querySelector(".modalContain");
        open.style.opacity = 1;
        open.style.visibility = "visible";
        openContain.style.opacity = 1;
        openContain.style.visibility = "visible";
        openContain.innerHTML= "";
        openContain.innerHTML += `<section style = "background-image: url(${element[1].splash});"
        class="modalContent">
            <div class= "modifications">
                <h4>${element[1].name.toUpperCase()}</h4>
                <div class="info"><p>${element[1].blurb}</p></div>            
                <div class = "levels"><p><img src="defensa.png">Defensa:  ${element[1].info.defense}</p>
                <p><img src="ataque.png">Ataque:  ${element[1].info.attack}</p>
                <p><img src="magia.png">Magia:  ${element[1].info.magic}</p>
                <p><img src="dificultad.png">Dificultad:  ${element[1].info.difficulty}</p></div></div>               
            </div>
        </section>`
    })
     
    const close = document.getElementById("close")
    close.addEventListener("click", () => {
        let open = document.querySelector(".modal");
        let openContain = document.querySelector(".modalContain");
        open.style.opacity = 0;
        open.style.visibility = "hidden";
        openContain.style.opacity = 0;
        openContain.style.visibility = "hidden";
    })

    
        
    }


players.forEach(paintModal);


const dataLOL = Object.keys(data.data).map( llave => {
    return data.data[llave];
})

orden.addEventListener("change", () => filterAll(dataLOL));
rolesSelector.addEventListener("change", () => filterAll(dataLOL));
level.addEventListener("change", () => filterAll(dataLOL));
nameSearch.addEventListener("change", () => filterAll(dataLOL));

//Creando la lista de nombres en el buscador
const optionName = Object.keys(data.data);
optionName.map(function (data) {
    let optionSearch = document.createElement("option");
    optionSearch.value = data;
    let dataListSearch = document.getElementById("search");
    dataListSearch.appendChild(optionSearch);
})

function filterAll (data) {
    document.getElementById("containCards").innerHTML = "";
    const roles = rolesSelector.value;
    const levelChampion = level.value;
    const nameChampion = nameSearch.value;
    const sorting = orden.value;
    let rolesFiltrados = filterData(data, roles);
    let nivelesFiltrados = filterLevel(rolesFiltrados, levelChampion);
    let nombresFiltrados = filterName(nivelesFiltrados, nameChampion);
    let ordenAlfabeticoFiltrado = dataSort (nombresFiltrados, sorting);
    const showingAll = Object.entries(ordenAlfabeticoFiltrado);
    showingAll.forEach(paintModal); //Funcion que muestra todo
}



