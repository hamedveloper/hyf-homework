///////////////////////////////////////////////////////////////////////Warmup

////1. log out after 2.5 second.

setTimeout(() => console.log('Called after 2.5 seconds'), 2500);

/////2. Delay Function

function delayPrint(delay, stringToLog) {
    setTimeout(() => console.log(stringToLog), (delay * 1000));
}

delayPrint(5, 'This string logged after 5 seconds');


/////3. Button usage with delay

function delayToPrint(delay, stringToLog) {
    setTimeout(() => console.log('Called after 5 second'), 5000);
};

document.getElementById('but').addEventListener('click', delayToPrint);

//////4. Earth Logger

function earthLogger() {
    console.log('Earth');
}

function saturnLogger() {
    console.log('Saturn');
}

function planetLogFunction(x) {
    return x;
}
planetLogFunction(saturnLogger());
planetLogFunction(earthLogger());

// ////////5. Create a button with the text called "Log location". 
// When this button is clicked the location(latitude, longitude)
// of the user should be logged out using this browser api.

const getLocation = document.getElementById('location');
const description = document.createElement('p');
const body = document.querySelector('body');
body.appendChild(description)

function success(pos) {
    var crd = pos.coords;

    description.innerHTML = 'This is the Latitude : ' + crd.latitude + '</br>' +
        'This is the Longitude: ' + crd.longitude
}

function result() {
    navigator.geolocation.getCurrentPosition(success);
}
//geolocation.getCurrentPosition(x)---->return a current position from navigator

document.getElementById('location').addEventListener('click', result)

//7. Create a function called runAfterDelay. 
// It has two parameters: delay and callback.
// When called the function should wait delay seconds and then call the provided callback
// function.Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
    setTimeout(callback, (delay * 1000));
}

runAfterDelay(4, function () {
    console.log('Should be logged after 4 seconds');
})

//8. Check if we have double clicked on the page. 
// A double click is defined by two clicks within 0.5 seconds. 
// If a double click has been detected, log out the text: "double click!"

body.addEventListener('click', timeOfClick)
let currentSecond = 0;

function timeOfClick() {
    currentSecond = (new Date().getTime())
    setTimeout(readTime, 500);
}


function readTime() {
    const dif = ((new Date().getTime()) - currentSecond)
    if (dif < 500) {
        console.log('Double Click');
    }
}

//9. Create a function called jokeCreator that has three parameters: 
//shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function.
//If you set tellFunnyJoke to true it should call the logFunnyJoke function 
//that should log out a funny joke.And vice versa.


function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) logFunnyJoke();
    else logBadJoke();
}

function logFunnyJoke() {
    console.log('That was verry funny')
}

function logBadJoke() {
    console.log('That was not so good');
}

jokeCreator(false, logFunnyJoke, logBadJoke)
jokeCreator(true, logFunnyJoke, logBadJoke)