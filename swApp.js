
async function getSWPlanet() {
    const ul = document.getElementById('planets');
    const SWContain = document.getElementById('planetNames');
    const nameHeading = document.createElement('h2');
    nameHeading.innerText = 'Planet Names';
    ul.innerText = '';
    ul.append(nameHeading, SWContain);
    try {
        const response = await axios.get('https://swapi.dev/api/planets');
        console.log(`response: ${response.data.results}`)
        for (let planet of response.data.results) {
            console.log(`Planets of Star Wars: ${planet.name}`);
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

// TODO: the below function has not been revised
async function getSWPlanet() {
    const ul = document.getElementById('planets');
    const SWContain = document.getElementById('planetNames');
    const nameHeading = document.createElement('h2');
    nameHeading.innerText = 'Planet Names';
    ul.innerText = '';
    ul.append(nameHeading, SWContain);
    try {
        const response = await axios.get('https://swapi.dev/api/planets');
        console.log(`response: ${response.data.results}`)
        for (let planet of response.data.results) {
            console.log(`Planets of Star Wars: ${planet.name}`);
            ul.append(makePlanetLI(planet));
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


const planetBtn = document.querySelector('#starWars');
planetBtn.addEventListener('click', () => {
    getSWPlanet()
    setTimeout( () => {
        const planetDataContainer = document.getElementById('starWarsDataContainer')
        const planetDataBtn = document.createElement('button')
        planetDataBtn.id = 'planetData';
        planetBtn.parentNode.replaceChild(planetDataBtn, planetBtn); 
        planetDataBtn.innerText = 'Get Planet Data';
        planetDataContainer.append(planetDataBtn);
    }, 2500)
});




