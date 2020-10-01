/////////////////////////////////////////////////////////////Weather app

const but = document.getElementById('getCity');
const cityInput = document.getElementById('cityName');

//get city name and put it in a varibale by clicking the button

but.addEventListener('click', selectCity);
const load = document.getElementById('loadingBar')
const content = document.querySelector('#content')
const cloud = document.querySelector('#cloud')



// function selectCity() {
//     const city = cityInput.value;
//     if (city) {
//         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b33af74225294d0f38ecf99fd7eaca9a`)
//             .then((response) => response.json()
//                 .then((data) => {
//                     load.innerHTML = 'loading';
//                     console.log(data)
//                 }))
//     }
// }
async function selectCity() {
    const city = cityInput.value;
    try {
        if (city) {
            content.innerHTML = '';
            loader.style.display = 'block'
            let weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b33af74225294d0f38ecf99fd7eaca9a`)
            let jsonWeatherData = await weatherData.json()
            loader.style.display = 'none'
            console.log(jsonWeatherData);
            content.innerHTML = `The city you have choosen is ${city} </br> The temperature of ${city} is ${jsonWeatherData.main.temp}C </br> Wind speed is ${jsonWeatherData.wind.speed}`;
            cloud.innerHTML = `The ${city} sky is ${jsonWeatherData.weather[0].description}`
            let currentTime = new Date(jsonWeatherData.sys.sunrise)
            console.log(currentTime);
        } else {
            alert('Please write a city name')
        }
    } catch {
        console.log('fail to load...');
    }


}