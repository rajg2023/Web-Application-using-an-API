document.addEventListener('DOMContentLoaded', () => {

    function parseCSV(csvText) {
        const lines = csvText.trim().split('\n');
        const headers = lines[0].split(',').map(h => h.trim());
        return lines.slice(1).map(line => {
            const cols = line.split(',').map(c => c.trim());
            let obj = {};
            headers.forEach((header, i) => {
                obj[header] = cols[i];
            });
            return obj;
        });
    }

    async function loadCities() {
        try {
            const response = await fetch('city_coordinates.csv');
            const csvText = await response.text();
            const cities = parseCSV(csvText);
            const citySelect = document.getElementById('city-select');

            citySelect.innerHTML = '<option value="">Choose a city…</option>';
            cities.forEach(city => {
                let option = document.createElement('option');
                option.value = `${city.latitude},${city.longitude}`;
                option.text = `${city.city}, ${city.country}`;
                citySelect.appendChild(option);
            });

            document.getElementById('submit-btn').disabled = false;
        } catch (error) {
            console.error('Error loading or parsing city CSV:', error);
            document.getElementById('city-select').innerHTML = '<option value="">Failed to load cities</option>';
        }
    }

    loadCities();

    const weatherForm = document.getElementById('weather-form');
    if (weatherForm) {
        weatherForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const citySelect = document.getElementById('city-select');
            if (!citySelect.value) return;
            const [lat, lon] = citySelect.value.split(',');

            fetch(`https://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json`)
                .then(resp => resp.json())
                .then(data => updateForecast(data))
                .catch(() => {
                    document.getElementById('forecast').innerHTML = `<div class="alert alert-danger">Could not retrieve weather data. Try again later.</div>`;
                });
        });
    }

    function getWeatherIcon(weatherCode) {
        // Map the weather codes to your icon filenames
        const iconMap = {
            clear: 'clear.png',
            clearday: 'clear.png',
            clearnight: 'clear.png',

            cloudy: 'cloudy.png',
            cloudday: 'cloudy.png',
            cloudnight: 'cloudy.png',

            fog: 'fog.png',
            fogday: 'fog.png',
            fognight: 'fog.png',

            humid: 'humid.png',
            humiday: 'humid.png',
            humidnight: 'humid.png',

            ishower: 'ishower.png',
            ishowerday: 'ishower.png',
            ishowernight: 'ishower.png',

            lightrain: 'lightrain.png',
            lightrainday: 'lightrain.png',
            lightrainnight: 'lightrain.png',

            lightsnow: 'lightsnow.png',
            lightsnowday: 'lightsnow.png',
            lightsnownight: 'lightsnow.png',

            mcloudy: 'mcloudy.png',
            mcloudyday: 'mcloudy.png',
            mcloudynight: 'mcloudy.png',

            cloudy: 'mcloudy.png',
            cloudyday: 'mcloudy.png',
            cloudynight: 'mcloudy.png',

            oshower: 'oshower.png',
            oshowerday: 'oshower.png',
            oshowernight: 'oshower.png',

            pcloudy: 'pcloudy.png',
            pcloudyday: 'pcloudy.png',
            pcloudynight: 'pcloudy.png',
            // Add more mappings as needed
        };

        // Return the image filename, default to a generic icon if not found
        return iconMap[weatherCode.toLowerCase()] || 'default.png';
    }


    function updateForecast(data) {
        if (!data || !data.dataseries) {
            document.getElementById('forecast').innerHTML = `<div class="alert alert-warning">No forecast data.</div>`;
            return;
        }
        let html = "";
        data.dataseries.slice(0, 7).forEach((day, index) => {
            const iconFile = getWeatherIcon(day.weather);  // Define iconFile here inside loop
            html += `
      <div class="col-md-2 col-6">
        <div class="card text-center mb-2">
          <div class="card-body">
            <img src="images/${iconFile}" alt="${day.weather}" style="width:50px; height:auto;" />
            <h5 class="card-title">Timepoint: ${day.timepoint}</h5>
            <p class="card-text">Temp: ${day.temp2m}&deg;C</p>
            <p class="card-text">${day.weather}</p>
          </div>
        </div>
      </div>`;
        });
        document.getElementById('forecast').innerHTML = html;
    }






});
