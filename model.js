const fetchAsteroidsButton = document.getElementById('fetchAsteroids');
const asteroidsList = document.getElementById('asteroidsList');

fetchAsteroidsButton.addEventListener('click', () => {
    fetchAsteroids();
});

async function fetchAsteroids() {
    const apiKey = 'DEMO_KEY'; // Replace with your NASA API key
    const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayAsteroids(data.near_earth_objects);
    } catch (error) {
        console.error('Error fetching asteroids:', error);
        asteroidsList.innerHTML = 'Error fetching data. Please try again later.';
    }
}

function displayAsteroids(asteroids) {
    asteroidsList.innerHTML = ''; // Clear previous results
    asteroids.forEach(asteroid => {
        const asteroidItem = document.createElement('div');
        asteroidItem.textContent = `${asteroid.name} - Estimated Diameter: ${asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km`;
        asteroidsList.appendChild(asteroidItem);
    });
}