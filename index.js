let films = [];
async function fetchText() {
  let response = await fetch('https://ghibliapi.herokuapp.com/films');
  let data = await response.json();
  films = data;

  let filmContainer = document.getElementById('filmList');

  films.forEach((film) => {
    console.log(film, 'check');
    filmContainer.innerHTML += `<div class="film-item"> <div class="bold"> ${film.title} </div> <div> ${film.description} </div> </div>`
  })
}
fetchText();