
import {dataSort, kindFeaturesFilter} from './data.js'
import allCharacters from './data/rickandmorty/rickandmorty.js';

let listFilter = allCharacters;

// Ordenando la data alfabeticamnete
/*
const orderAll = allCharacters.sort((a,b) => {
  if (a.name > b.name ) {
    return 1;
  }
  if (a.name < b.name ) {
    return -1;
  }
  return 0;
})
console.log(orderAll.reverse()) */

// ****************************************************


const getListAllCharacters = () => {
  drawResults(allCharacters);
 
}
  
// Array and pagination
function drawResults(arrayOfCharacters){
  drawCharactersPage(0,arrayOfCharacters);
  const buttonsContainer=document.getElementById("buttonsContainer");
    buttonsContainer.innerHTML="";
  
  for (let pageIndex = 0; pageIndex < arrayOfCharacters.length; pageIndex = pageIndex + 20) {
          const button = document.createElement("button");
          const buttonText = document.createTextNode(parseInt(pageIndex / 20) + 1);
          button.appendChild(buttonText);
  
          if (pageIndex == 0) button.classList.add('active');
  
          button.addEventListener('click', function () {
              pageIndex == pageIndex;
              drawCharactersPage(pageIndex, arrayOfCharacters);
              let currentButton = document.querySelector(".buttonsContainer button.active");
              currentButton.classList.remove("active");
              button.classList.add("active");
          });
          buttonsContainer.appendChild(button);
      }

}

// print cards

function drawCharactersPage (index,arrayOfCharacters) {
  //muestra 20 personajes por página
  
  let pageOfCharacters = arrayOfCharacters.slice(index, index+20);
  //imprimir en el html 
  const elementOrderedList=document.getElementById('cards');
  elementOrderedList.innerHTML="";
  
  // recorriendo las cartas y poniendo los datos
  // Un bucle for se compone de una instrucción en la cual una variable contador se define y se incrementa hasta el límite tope que hayamos puesto.
  // En este caso, la variable i será el contador del bucle e irá incrementando en cada iteracción.
  for ( let i = 0 ; i < pageOfCharacters.length ;i++ ){
    // declaramos una constante
    const result=pageOfCharacters[i];
    //crear un nodo div 
    const elementDiv= document.createElement("div");
    // Command Substitution  (backtick `…`)
    //    The purpose of command substitution is to evaluate the command which is placed inside the backtick and provide its result as an argument to the actual command.
    // The command substitution can be done in two ways one is using $(…) and the other is `…`. Both work same, but the $(…) form is the modern way and has more clarity and readability.
    
    elementDiv.innerHTML =`
      <h3 class="h3List" >${result.name}</h3>
      <img class="imageList" src="${result.image}" alt="${result.name}"/>
      <section class="dataCard">
        <p> Status: <span> ${result.status} </span></p>
        <p> Especie: <span> ${result.species} </span></p>
        <p> Gender: <span> ${result.gender} </span></p>
      </section>
      `
      elementOrderedList.appendChild(elementDiv);

      elementDiv.addEventListener('click', () => {
        showModal(result);
  
     });

        
  }
}
// *********************************************************************click and show characteres***********
document.querySelector('#btnFirst').addEventListener('click',getListAllCharacters);

// ***************************************************episodios del 1-31

// crear option de selec

function createEpisodes (){
  let episodios = document.getElementById("episodes");
  for (let i = 1; i<=31; i++) {
    let option = document.createElement("option");//1° crear elemento de tipo option.
    let textnode = document.createTextNode(i);// 2° crear elemento de tipo texto.
    option.appendChild(textnode); //3° agrega el elemnto de texto dentro de elemento option.
    episodios.appendChild(option); //4° agrega elemento option dentro de elemento select. 
  }
}
createEpisodes();
// ******************************************************
 function showModal (item) {
  //window.open("#myModal","_self");
  //console.log(item);
  let myModal = document.getElementById('myModal');
  myModal.style.visibility = "visible" ;

  let characterImage = document.getElementById('photoModal');
  characterImage.src = item.image;
  let characterStatus = document.getElementById('statusModal');
  characterStatus.innerHTML = "<b>Status: </b>" + item.status;
  let characterSpecies= document.getElementById('speciesModal');
  characterSpecies.innerHTML = "<b>Specie: </b>" + item.species;
  let characterType= document.getElementById('typeModal');
  characterType.innerHTML = "<b>Type: </b>" + item.type;
  let characterGender= document.getElementById('genderModal');
  characterGender.innerHTML = "<b>Gender: </b>" + item.gender;
  let characterOrigin= document.getElementById('originModal');
  characterOrigin.innerHTML = "<b>Origin: </b>" + item.origin.name;
  let characterLocation= document.getElementById('locationModal');
  characterLocation.innerHTML = "<b>Location: </b>" + item.location.name;
  let characterName = document.getElementById('nameModal');
  characterName.innerHTML = item.name; // innetHTML se usa para cambiar el valor de un p.

  let episodes = "";
  item.episode.forEach(element => {
    episodes += element.slice(40, element.length) + ", ";
  });
  episodes = episodes.slice(0, episodes.length-2) + ".";

  let characterEpisode= document.getElementById('episodeModal');
  characterEpisode.innerHTML = "<b>Episode: </b>" + episodes;
}

const close = document.getElementById("xClose");
close.addEventListener('click', () => {
  let myModal = document.getElementById('myModal');
  myModal.style.visibility = "hidden";
})



// ***********************************************************Searching**************1
let eachCharacter = Object.keys(allCharacters).map(key => {return allCharacters[key];});
const searchBar=document.getElementById('searchByName');
searchBar.addEventListener('keyup',(e) => {
 const searchString= e.target.value.toLowerCase();
 const filteredCharacters = eachCharacter.filter(character => {
   return character.name.toLowerCase().includes(searchString);
 });
 
 listFilter = filteredCharacters; //metemos en la variable los elementos filtrados por la caja de busqueda
 drawResults(filteredCharacters);

 let notFound = document.getElementById('notFound');
 if (filteredCharacters.length == 0) {
   notFound.style.visibility = "visible"; console.log("no hay :c");
  }else{
   notFound.style.visibility = "hidden"; console.log('si hay c:');
 }
});

let displayHome = document.getElementById("homeSection");
let displayLogo=document.getElementById("logoHeader");
let displayPrincipalNav=document.getElementById("nav");
let displaySubheader=document.getElementById("subheaderSection");
let displayCharacters=document.getElementById("charactersSection");
let displayFooter=document.getElementById("footerSection");
let displayAbout=document.getElementById("aboutSection");
let displayStatistics=document.getElementById("statisticsSection");
let displayAdvancedFilter=document.getElementById("advancedFilter");

// ***********************************************************click start home**************1
document.querySelector('#btnFirst').addEventListener('click', getEnter );
function getEnter(){
    displayHome.classList.add("hide");
    displayLogo.classList.remove("hide");
    displayPrincipalNav.classList.remove("hide");
    displaySubheader.classList.remove("hide");
    displayCharacters.classList.remove("hide");
    displayFooter.classList.remove("hide");
}


// *******************************************************************************************click and return************2
document.querySelector('#boxName').addEventListener('click', previousMain );
 
function previousMain(){
  // *************************************************show start home ******
  displayHome.classList.remove("hide");
  // ************************************************remove header section******
  displayLogo.classList.add("hide");
  // *********************************************remove principal nav section******
  displayPrincipalNav.classList.add("hide");
  // **********************************************remove search & order section******
  displaySubheader.classList.add("hide");
  // ************************************************remove character section******
  displayCharacters.classList.add("hide");
  // ************************************************remove oothers about and stat******
  displayAbout.classList.add("hide");
  displayStatistics.classList.add("hide");
  // ************************************************remove footer section******
  displayFooter.classList.add("hide");
}

// *********************************************************************************click and show about************2
document.querySelector('#aboutbutton').addEventListener('click', aboutInfo );
 
function aboutInfo(){
 
  
  // **********************************************remove search & order section******
  displaySubheader.classList.add("hide");
  // ************************************************remove character section******
  displayCharacters.classList.add("hide");
  displayAdvancedFilter.classList.add("hide");
  // ************************************************remove oothers about and stat******
  displayAbout.classList.remove("hide");
  displayStatistics.classList.add("hide");

}



// ***********************************************************orde a-z 
const orderAll = document.querySelector("#order");
let sortData = [] ;

orderAll.addEventListener( "change" , (event) => {
    document.getElementById("cards").innerHTML="";
    sortData =dataSort(listFilter,"name",event.target.value); 
    //pasamos la lista filtrada en vez de la lista completa.
    // const ordenO = Object.entries(sortData);
     const ordenO = sortData;
     console.log(sortData);              
     return drawResults(ordenO);  
  });

// **********************************************************order data status
   const orderByStatus = document.querySelector("#estado_vida");
   const orderBySpecies = document.querySelector("#species");
   const orderByGender = document.querySelector("#gender");
   const orderByOrigin = document.querySelector("#origin");
   const orderByEpisodes = document.querySelector("#episodes");

   orderByStatus.addEventListener("change", (event) => {  
     document.getElementById("cards").innerHTML="";
      if(sortData.length == 0 ){
        let dataFilter = kindFeaturesFilter( listFilter, event.target.value,"status");
         eachCharacter = dataFilter;  
      }
   else{
    let dataFilter = kindFeaturesFilter( sortData, event.target.value,"status");
    eachCharacter = dataFilter;

   }

      return drawResults(eachCharacter); 
}); 

//spec

orderBySpecies.addEventListener("change", (event) => {      document.getElementById("cards").innerHTML="";
if(eachCharacter.length >= 0 ){
  let dataFilter = kindFeaturesFilter( listFilter, event.target.value,"species");
  eachCharacter = dataFilter;  
}
   else{
    let dataFilter = kindFeaturesFilter( listFilter, event.target.value,"species");
    eachCharacter = dataFilter;

   } 
   
   return drawResults(eachCharacter);  });


///geneder

   orderByGender.addEventListener("change", (event) => { 
      document.getElementById("cards").innerHTML="";
      if(eachCharacter.length >= 0 ){
      let dataFilter = kindFeaturesFilter( listFilter, event.target.value,"gender");
      eachCharacter = dataFilter;  
}
   else{
    let dataFilter = kindFeaturesFilter( listFilter, event.target.value,"gender");
    eachCharacter = dataFilter;

   } 
   
   return drawResults(eachCharacter);  });

   


   orderByOrigin.addEventListener("change", (event) => { 
    document.getElementById("cards").innerHTML="";
    if(eachCharacter.length >= 0 ){
      console.log(event.target.value);
    let dataFilter = kindFeaturesFilter( listFilter, event.target.value,"origin");
    eachCharacter = dataFilter;  
}
 else{
  let dataFilter = kindFeaturesFilter( listFilter, event.target.value,"origin");
  eachCharacter = dataFilter;

 } 
 
 return drawResults(eachCharacter);  });


 orderByEpisodes.addEventListener("change", (event) => { 
  document.getElementById("cards").innerHTML="";

let dataFilter = kindFeaturesFilter( listFilter, event.target.value,"episodes");
eachCharacter = dataFilter;



return drawResults(eachCharacter);  });