async function getSWPlanet() {
    const ul = document.getElementById('planets');
    const nameHeading = document.createElement('h2');
    nameHeading.innerText = 'Planet Names';
    ul.innerText = '';
    ul.append(nameHeading);

    try {
        const response = await axios.get('https://swapi.dev/api/planets');
        for (let planet of response.data.results) {
            console.log(`Planets of Star Wars: ${planet.name} climate: ${planet.climate}`);
            ul.append(makePlanetLI(planet));
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function makePlanetLI(planet) {
    const newLI = document.createElement('li');
    const planetName = document.createElement('b');
    planetName.innerText = planet.name;
    newLI.append(planetName);
    return newLI;
}

async function getSWPlanetData() {
    const ulData = document.getElementById('planetClimateList');
    const dataHeading = document.createElement('h2');
    dataHeading.innerText = 'Planet Climates';
    ulData.innerText = '';
    ulData.append(dataHeading);

    try {
        const response = await axios.get('https://swapi.dev/api/planets');
        for (let planet of response.data.results) {
            console.log(`Climate of Planets of Star Wars: ${planet.name} : ${planet.climate}`);
            ulData.append(makePlanetDataLI(planet));
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function makePlanetDataLI(planet) {
    const newLI = document.createElement('li');
    newLI.innerText = `${planet.name}: ${planet.climate}`;
    return newLI;
}

const planetBtn = document.querySelector('#starWars');
planetBtn.addEventListener('click', () => {
    getSWPlanet();
    setTimeout(() => {
        const planetDataContainer = document.getElementById('starWarsDataContainer');
        const planetDataBtn = document.createElement('button');
        planetDataBtn.id = 'planetData';
        planetDataBtn.innerText = 'Get Planet Climate';
        planetBtn.parentNode.replaceChild(planetDataBtn, planetBtn);
        planetDataContainer.append(planetDataBtn);

        planetDataBtn.addEventListener('click', () => {
            getSWPlanetData()
            planetDataBtn.style.display = 'none'
        });
    }, 2000);
});

