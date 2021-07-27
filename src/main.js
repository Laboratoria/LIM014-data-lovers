/*  // import {orderFunction, dataSort, filterLevel, filterData, filterName} from './data.js'
import data from './data/lol/lol.js';

// Trae un objeto
console.log(data);

 console.group("Funciones Óptimas")
console.log(orderFunction(dataArray));
console.log("dataSort", dataSort(dataArray, "za"));
console.log("filterLevel", filterLevel(dataArray, 'dificil'));
console.log("filterData", filterData(dataArray, "Fighter"));
console.log("filterName", filterName(dataArray, "Aatrox"));
console.groupEnd()

const paintModal = element => {
  const card = document.createElement("div")
  card.innerHTML = `<button class="imageB" widht=130 ><img class="imgPlayers" alt="${element[1].name}" src= "${element[1].splash}">
  <div class="namePlayers"<p> ${element[1].name.toUpperCase()} </p></div></button>`
  card.className ="cardsPlayers"
  document.getElementById("containCards").appendChild(card);

  }
//Constante para entrar en la data
const players = Object.entries(data.data);
// Plasmar las cards en el div "containCards"
players.forEach(paintModal); */


import {dataSort, filterLevel, filterData, filterName} from './data.js';
import data from './data/lol/lol.js';


 //Object.entries y Object.values obtengo los mismos valores
const players = Object.values(data.data); //Array con todos los elementos
//console.log(players[1].tags);

const showCards = (data) => {

    const containCards = document.getElementById('containCards');
    containCards.innerHTML = '';
    //element es cada uno de los elementos de array, el array es players.
    const principalFunction = (element) => {

        const card = document.createElement("div");
        card.innerHTML =

        `
        <button class="imageB" >
            <img class="imgPlayers" alt="${element.name}" src= "${element.splash}">

        </button>
        <div class="namePlayers"><p> ${element.name.toUpperCase()} </p></div>`

        card.className = "cardsPlayers"

        card.addEventListener("click",() => {
            let open = document.querySelector(".modalBackground");
            let openContain = document.querySelector(".modal");
            open.style.visibility = "visible";
            open.style.opacity = "1";
            openContain.style.visibility = "visible";
            openContain.style.opacity = "1";
            document.querySelector(".modal").innerHTML ="";
            document.querySelector(".modal").innerHTML +=
                `<section class="modalContent" style="background-image: url(${element.splash});">
                    <div class="modifications">
                        <h4>${element.name.toUpperCase()}</h4>
                        <div class = "info"><p>${element.blurb}</p></div>
                        <div class = "levels">
                            <p><img src="https://img.icons8.com/doodle/48/000000/knight-shield.png"/>Defensa: ${element.info.defense}</p>
                            <p><img src="https://img.icons8.com/color/48/000000/stick-fighting.png"/>Ataque: ${element.info.attack}</p>
                            <p><img src="https://img.icons8.com/emoji/48/000000/magic-wand.png"/>Magia: ${element.info.magic}</p>
                            <p><img src="https://img.icons8.com/color/48/000000/effort.png"/>Dificultad: ${element.info.difficulty}</p>
                        </div>
                    </div>
                </section>`

            let closeModal = document.getElementById('close');
            closeModal.addEventListener('click', () => {
                let close = document.querySelector(".modalBackground");
                let closeModal = document.querySelector(".modal");
                close.style.visibility = "hidden";
                close.style.visibility = "0";
                closeModal.style.visibility = "hidden";
                closeModal.style.visibility = "0";
            })


          })

            document.getElementById("containCards").appendChild(card)
        };
            data.forEach(principalFunction);
    }



//Cuando ejecute la funcion showCard, data toma el valor de players, y le paso el array de objeto como parametro para que pinte las cartas
showCards(players);

//  Funcion para crear las opciones del datalist
let datalistSearch = document.getElementById("search");
    const optionName = Object.keys(data.data);
    optionName.forEach(function(data){
        let optionSearch = document.createElement("option")
        optionSearch.value = data;
        datalistSearch.appendChild(optionSearch);
});


let selectOrden = document.getElementById("selectOrden");
let playersLevel = document.getElementById("playersLevel");
let roleSelector = document.getElementById("roleSelector");
let filterSearch = document.getElementById("searchOne");
let clean = document.getElementById("clean");

selectOrden.addEventListener("change", () => generalFilter(players));
playersLevel.addEventListener("change", () => generalFilter(players));
roleSelector.addEventListener("change", () => generalFilter(players));
filterSearch.addEventListener("change", () => generalFilter(players));
clean.addEventListener("click", cleaning)


function generalFilter (data) {

    let byTagsName = filterData(data, roleSelector.value);
    let filtering = filterLevel(byTagsName, playersLevel.value);
    let nameFilter = filterName(filtering, filterSearch.value);
    let sorting = dataSort(nameFilter, selectOrden.value);

    showCards(sorting);

    if(nameFilter == ""){
      const containCards = document.getElementById('containCards');
      containCards.innerHTML = '';
        alert("Este champeón no tiene el rol selecionado")
    }


}

function cleaning () {
    selectOrden.value = '';
    playersLevel.value = '';
    roleSelector.value = '';
    filterSearch.value = '';
    showCards(players);
}

window.onscroll = function(){
    if(document.documentElement.scrollTop>200){
        document.querySelector(".bottonScroll").classList.add("show")
    }else{
        document.querySelector(".bottonScroll").classList.remove("show")
    }
}
document.querySelector(".bottonScroll").addEventListener("click", () =>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
})
