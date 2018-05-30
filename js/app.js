let containerFilms = $('#container-films');
const pelis = "https://swapi.co/api/films/";

$(document).ready(function () {
    $('.modal').modal();
    $(document).on("click", ".modal-trigger", showModal);
    getData(pelis, drawData);
});

function getData(url, doIt) {
    $.ajax({
        dataType: "json",
        url: url
    }).done(doIt)
        .fail(function (status) {
            console.log("error");
        })
};

function drawData(data) {
    const films = data.results;
    /*console.log(films);*/
    let cardMovies = ' ';
    let characters = ' ';
    const imgMovie = './assets/images/stars_wars_movies.jpg';
    films.forEach(function (element) {
        const movie = element.title;
        const resumen = element.opening_crawl;
        const personajes = element.characters;
        personajes.forEach(personaje => {
            characters += `<p><a class="modal-trigger" href="#modal1">${personaje}</a></p>`
        })
        cardMovies += `<div class ="row">
    <div class="card col s10 m8 l5 card-height ">
    <div class="card-image waves-effect waves-block waves-light">
    <img class="activator img-card" src=${imgMovie}>
    </div>
    <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">${movie}<i class="material-icons right">add_circle</i></span>
    <p class="center-align" >${resumen}</p>
    </div>
    <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">${movie} <span>Characters</span><i class="material-icons right">highlight_off</i></span>
    ${characters}
    </div>
    </div>`;
        containerFilms.html(cardMovies)
    })

};

/*Modales*/
const showModal = event => {
    const characterURL = event.target.text
    getData(characterURL, resetModal)
}

const resetModal = (data) => {
    let name = document.getElementById('name');
    let gender = document.getElementById('gender');
    let birth_year = document.getElementById('birth_year');
    let height = document.getElementById('height');
    let mass = document.getElementById('mass');
    let skin_color = document.getElementById('skin_color');
    let eye_color = document.getElementById('eye_color');
    let hair_color = document.getElementById('hair_color');

    name.innerText = data.name;
    gender.innerText = data.gender;
    birth_year.innerText = data.birth_year;
    height.innerText = data.height;
    mass.innerText = data.mass;
    skin_color.innerText = data.skin_color;
    eye_color.innerText = data.eye_color;
    hair_color.innerText = data.hair_color;
}