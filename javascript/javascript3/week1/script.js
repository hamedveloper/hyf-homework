const but = document.getElementById('getCity');
const cityInput = document.getElementById('cityName');

//get city name and put it in a varibale by clicking the button

but.addEventListener('click', selectCity);

function selectCity() {
    const city = cityInput.value;
    return city;
}

// const weather = fetch(`api.openweathermap.org / data / 2.5 / weather ? q = ${selectCity()}& appid =${}
//           {
//             your api key
//         }
// )

const weathe = fetch(`'http://api.openweathermap.org/data/2.5/weather?q=${selectCity()}&appid=b33af74225294d0f38ecf99fd7eaca9a'`).then(
    (response) =>
    response.json().then((data) =>
        console.log(data))
)