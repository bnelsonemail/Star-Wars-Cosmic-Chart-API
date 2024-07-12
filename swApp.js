
async function getSWPlanet() {
    const ul = document.getElementById('planets');
    const SWContain = document.getElementById('planetNames');
    const nameHeading = document.createElement('h2');
    nameHeading.innerText = 'Planet Names';
    ul.innerText = '';
    ul.append(nameHeading, SWContain);
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


function makePlanetLI(planet){
    const newLI = document.createElement('LI');
    const planetName = document.createElement('B');
    planetName.innerText = planet.name;
    newLI.append(planetName);
    return newLI;
}

// Planet Data: Climate
async function getSWPlanetData() {
    const ulData = document.getElementById('planetClimateList');
    const SWDataContain = document.getElementById('starWarsDataContainer');
    const dataHeading = document.createElement('h2');
    dataHeading.innerText = 'Planet Names';
    ulData.innerText = '';
    ulData.append(dataHeading, SWDataContain);
    try {
        const response = await axios.get('https://swapi.dev/api/planets');
        console.log(`response: ${response.data.results}`)
        for (let planet of response.data.results) {
            console.log(`Climate of Planets of Star Wars: ${planet.name} : ${planet.climate}`);
            ulData.append(makePlanetDataLI(planet));
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function makeDataPlanetLI(planet){
    const newLI = document.createElement('LI');
    const planetName = document.createElement('B');
    planetName.innerText = planet.name + ': ' + planet.climate;
    newLI.append(planetName);
    return newLI;
}


const planetBtn = document.querySelector('#starWars');
planetBtn.addEventListener('click', () => {
    getSWPlanet()
    setTimeout( () => {
        const planetDataContainer = document.getElementById('starWarsDataContainer')
        const planetDataBtn = document.createElement('button')
        planetDataBtn.id = 'planetData';
        planetBtn.parentNode.replaceChild(planetDataBtn, planetBtn); 
        planetDataBtn.innerText = 'Get Planet Climate';
        planetDataContainer.append(planetDataBtn);
        planetDataBtn.addEventListener('click', () => {
            getSWPlanetData()
        }); // Move the event listener here
        
    }, 2000)
});


