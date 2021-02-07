// // let newButtonElement = document.createElement('button');
// // newButtonElement.textContent = 'Meni bos';
// // newButtonElement.classList.add("btn");
// // newButtonElement.dataset.id = 1;
// // document.body.appendChild(newButtonElement);

// // let newSecondButtonElement = document.createElement('button');
// // newSecondButtonElement.textContent = 'Meni bos';
// // newSecondButtonElement.classList.add("btn");
// // newSecondButtonElement.dataset.ownerName = "Zafar";
// // document.body.appendChild(newSecondButtonElement);

// // // let buttons = document.querySelectorAll('[data-id]');
// // // console.log(buttons);

// // // buttons.forEach(e => {
// // //   e.addEventListener('click', event => {
// // //     // console.log(event.target);
// // //     let dataDirection = event.target.getAttribute("data-direction");
// // //     console.log(dataDirection);
// // //   });
// // // });

// // let openButtons  = document.querySelectorAll('[data-owner-name]');

// // openButtons.forEach(e => {
// //   e.addEventListener('click', event => {
// //     console.log(event.target.getAttribute('data-owner-name'));
// //   });
// // });

// let newElement = document.querySelectorAll("[data-rang]");
// // newElement(e => {
// //   e.addEventListener("click", event => {
// //     console.log(event.target);
// //   })
// // })

// for (let e of newElement) {
//   let attr = e.getAttribute('data-rang');
//   e.style.backgroundColor = attr;
// }





//===============================================================

let searchInputElement = document.querySelector(".search-movie");
let moviesListElement = document.querySelector(".movies-list");
let closeButton=document.querySelector('.close');
let modal=document.querySelector('.modal');


searchInputElement.addEventListener('keyup', function(event) {
  let keyword = event.target.value;
  if(keyword.length > 3){
    let movies = getMoviesByName(keyword);
    renderItems(movies);
  } else {
    moviesListElement.textContent = "";
  }
});

function renderItems(array) {
  moviesListElement.textContent = "";

  for(let item of array){
    //li
    let newLiElemt = document.createElement("li");
    newLiElemt.textContent = item.title;
    newLiElemt.classList.add("movies_list");
    moviesListElement.appendChild(newLiElemt);
    //button
    let newButton = document.createElement("button");
    newButton.textContent = "Info";
    newButton.classList.add("info_btn");
    moviesListElement.appendChild(newLiElemt);
    newLiElemt.appendChild(newButton);

    newButton.onclick = function() {
      modal.setAttribute('style', 'display: block');
      searchInputElement.setAttribute('style', 'display: none');
      moviesListElement.setAttribute('style', 'display: none');

    let movieInfoHeader = document.createElement('h4');
    let movieInfoMain = document.createElement('p');
    let movieInfoActors = document.createElement('p');
    movieInfoHeader.classList.add('header');
    movieInfoMain.classList.add('main');
    movieInfoActors.classList.add('main');
    // modal.appendChild(movieInfoHeader, movieInfoMain);
    modal.appendChild(movieInfoHeader);
    modal.appendChild(movieInfoMain);
    modal.appendChild(movieInfoActors);

    movieInfoHeader.textContent = `Kino nomi: ${item.title}`;
    movieInfoMain.textContent = `Kino chiqgan yili: ${item.year}`;
    movieInfoActors.textContent = `Aktyorlar: ${item.cast}`;
    closeButton.onclick = function() {
      movieInfoHeader.remove();
      movieInfoMain.remove();
      movieInfoActors.remove();
      modal.setAttribute('style', 'display: none');
      searchInputElement.setAttribute('style', 'display: block');
      moviesListElement.setAttribute('style', 'display: block');
    };
    };
  }
}

function getMoviesByName(name) {
  return kinolar.filter(e => {
    return e.title.toLowerCase().includes(name.toLowerCase());
  });
}

function myFunction() {
  
}