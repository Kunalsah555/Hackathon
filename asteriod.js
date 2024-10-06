// Your NASA API Key (you can get it from https://api.nasa.gov/)
const API_KEY = 'YFF4B2MD2vpElbC8OP0xl66TVcHwyqOXqnPvo95E';  // Replace 'DEMO_KEY' with your actual API key
const API_URL = `https://api.nasa.gov/neo/rest/v1/feed/today?api_key=${API_KEY}`;

// DOM Elements
const asteroidList = document.getElementById('asteroids');

// Fetch asteroid data from NASA API
async function fetchAsteroids() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayAsteroids(data.near_earth_objects);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Display the asteroids on the page
function displayAsteroids(asteroids) {
    const today = new Date().toISOString().split('T')[0];
    const todayAsteroids = asteroids[today] || [];

    if (todayAsteroids.length === 0) {
        asteroidList.innerHTML = '<li>No asteroids approaching Earth today!</li>';
    } else {
        todayAsteroids.forEach(asteroid => {
            const asteroidItem = document.createElement('li');
            asteroidItem.innerHTML = `
                <strong>Name:</strong> ${asteroid.name}<br>
                <strong>Estimated Diameter (min):</strong> ${asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} km<br>
                <strong>Estimated Diameter (max):</strong> ${asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km<br>
                <strong>Velocity:</strong> ${asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h<br>
                <strong>Distance from Earth:</strong> ${asteroid.close_approach_data[0].miss_distance.kilometers} km<br>
                <strong>Potentially Hazardous:</strong> ${asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
            `;
            asteroidList.appendChild(asteroidItem);
        });
    }
}

// Call the function to fetch and display asteroids
fetchAsteroids();
