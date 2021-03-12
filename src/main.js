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
        
        `<button class="imageB" >
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
                            <p>Defensa: ${element.info.defense}</p>
                            <p>Ataque: ${element.info.attack}</p>
                            <p>Magia: ${element.info.magic}</p>
                            <p>Dificultad: ${element.info.difficulty}</p>
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
 


/* 
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
    const nameFilter = filterName(players, filterSearch.value)
    showCards(nameFilter); 
}); 
    
 */


/* let selectOrden = document.getElementById("selectOrden");
let playersLevel = document.getElementById("playersLevel");
let roleSelector = document.getElementById("roleSelector");
let filterSearch = document.getElementById("searchOne");
let clean = document.getElementById("clean");


selectOrden.addEventListener("change", () => generalFilter(players));
playersLevel.addEventListener("change", () => generalFilter(players));
roleSelector.addEventListener("change", () => generalFilter(players));
filterSearch.addEventListener("change", () => searchFilter(players));
clean.addEventListener("click", cleaning)

function generalFilter (data) {
    
    let byTagsName = filterData(data, roleSelector.value);
    let filtering = filterLevel(byTagsName, playersLevel.value);
    let sorting = dataSort(filtering, selectOrden.value);
    
    
    //console.log(sortingAZ);
    //console.log(byTagsName);
    //console.log(filtering);
    //console.log(playersLevel.value);

    showCards(sorting);    
   
}  

function searchFilter (data) {
    let nameFilter = filterName(data, filterSearch.value);   
    showCards(nameFilter); 
} 
function cleaning () {
    selectOrden.value = '';
    playersLevel.value = '';
    roleSelector.value = '';
    filterSearch.value = '';
    showCards(players);
} */

