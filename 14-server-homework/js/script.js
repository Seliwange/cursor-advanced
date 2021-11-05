const baseUrl = "https://swapi.dev/api";
const films2 = "https://swapi.dev/api/films/2/";
const films = "https://swapi.dev/api/films";

const translateBtn = document.getElementById("translate");
const peopleList = document.getElementById("people__list");
const loadBtnPeople = document.getElementById("people__load");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const planetList = document.getElementById("planet__list");
const page = document.getElementById("page");
const prevBtn = document.getElementById("prev__btn");
const nextBtn = document.getElementById("next__btn");
let currentPage = 1;


const getPeople = (searchFilm) => {
    peopleList.innerHTML = "loading...";
    axios
    .get(`${baseUrl}/films/2`)
    .then((response) => {
        const listElems = response.data.characters;
        listElems.forEach(item => {
            axios
            .get(`${item}`)
            .then((response) => {
                const list = Object.values(response).map((data) => 
                `<div class="people">  
                <h3>Full name: ${data.name}</h3>
                <p>Date of birth: ${data.birth_year}</p>
                <p>Gender: ${data.gender}</p>
                </div>`
                );
                peopleList.innerHTML = list.join("");
            })
            .catch((err) => {
                console.log("Error:", err);
                peopleList.innerHTML = "Error occured :" + err.message;
            });
        });
    })
    .catch((err) => {
        console.log("Error:", err);
        peopleList.innerHTML = "Error occured :" + err.message;
    });
};

loadBtnPeople.onclick = getPeople;

const getPlanets = () => {
    planetList.innerHTML = "loading...";
    page.innerHTML = currentPage;
    axios
    .get(`${baseUrl}/planets/?page=${currentPage}`)
    .then((response) => {
        const listElems = response.data.results.map((item) =>  `
            <div class="planet">  
                <h3>Name: ${item.name}</h3>
                <p>The average population: ${item.population}</p>
                <p>Terrain: ${item.terrain}</p>
            </div>
            `
        );
  
        planetList.innerHTML = listElems.join("");
      })
      .catch((err) => {
        console.log("Error:", err);
        planetList.innerHTML = "Error occured :" + err.message;
      });
};

nextBtn.addEventListener("click", () => {
    currentPage += 1;
    getPlanets();
});
prevBtn.addEventListener("click", () => {
    if(currentPage === 1) return;
    currentPage -= 1;
    getPlanets();
});

getPlanets();

translateBtn.addEventListener("click", () => {
    axios
    .get(`${baseUrl}/planets/?format=wookiee`)
    .then((response) => {
        getPlanets(response);
    })
});