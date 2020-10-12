//////////////////////////////////////////////////////Movies exercise

const movieUrl = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"

//I defined bad movies based on their rating. for those have rating less than 3.

function movies() {
    fetch(movieUrl).then((response) => response.json()).then((data) => {
        const badMovies = data.filter(x => x.rating < 3)
        console.log(badMovies);
        const badMoviesSince2000 = badMovies.filter(x => x.year > 2000)
        console.log(badMoviesSince2000);
    });
}

movies()

//////////////////////////////////////////Promise that resolves after set time

async function delayPromise(resolveAfter) {
    const mypromise = new Promise(function (resolve) {
        setTimeout(() => resolve('I am called asynchronously'), resolveAfter * 1000);
    })
    return mypromise;
}

delayPromise(6).then(value => console.log(value))

///////////////////////////////////////////////////////////////////Rewrite time

setTimeoutPromise(3000)
    .then(() => {
        console.log('Called after 3 seconds');
    });


function setTimeoutPromise(t) {
    let setPromise = new Promise((res) => {
        setTimeout(() => {
            res();
        }, t);
    })
    return setPromise;
}

//////////////////////Rewrite navigator.geolocation.getCurrentPosition to promises

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });

function getCurrentLocation() {
    let myLocation = new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition((sucess, error) => {
            if (sucess) res(sucess);
            if (error) rej(error);
        })
    })
    return myLocation
}

/////////////////////////////////////////////////////////////////Fetching and waiting

setTimeout(giveWeather, 3000);
setTimeout(giveWeather1, 3000);

function giveWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=b33af74225294d0f38ecf99fd7eaca9a')
        .then(answer => answer.json())
        .then(weather => console.log(weather))
}

async function giveWeather1() {
    let myData = await (await fetch('https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=b33af74225294d0f38ecf99fd7eaca9a')).json()
    console.log(myData);
}

////////////////////////////////////////////////////////////////////////////Visual promise