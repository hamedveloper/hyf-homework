///////////////////////////////////////////////////////Function as a variable

//Create an array with 3 items. All items should be functions. 
//Iterate through the array and call all the functions.

const arr = [function0, function1, function2];

function function0() {
    console.log('I am function0');
};

function function1() {
    console.log('I am function1');
};

function function2() {
    console.log('I am function2');
};
arr.forEach(functionList => functionList());

/*Create a function as a const and try creating a function normally. 
Call both functions. */

//functionCreated(); //It gives an error if you call it by function name (func1),
//Moreover it can not be done here before declaration however the normal function can be done 
//before everything in the program 

normalFunc();

const functionCreated = ()=> console.log('I am a function attached with a constant');

function normalFunc() {
    console.log('I am a normal function');
};

functionCreated(); //It gives an error if you call it by function name (func1)
normalFunc();

//Create an object that has a key whose value is a function.
//Try calling this function.

objectName = {
    'key': ()=>console.log('Call me, I am in the object')
}
objectName.key() //You should call it via the key in the object.

///////////////////////////////////////////////////////The fastest presser in this realm
const body = document.querySelector('body');
const lBox = document.getElementById('lBox');
const sBox = document.getElementById('sBox');
const restart = document.getElementById('restart');
const countS = document.getElementById('countS');
const countL = document.getElementById('countL');


const timeInput = document.getElementById('setTime')
timeInput.addEventListener('input', getValueInput)

let sCounter = 0;
let lCounter = 0;
let score = [];

function getValueInput() {
    return timeInput.value;
}

const startGame = document.getElementById('startGame');
startGame.addEventListener('click', start);


//restart function
restart.addEventListener('click', restartGame);

function restartGame() {
    document.location.reload()
}

//Game over function. thsi function get activied when set time out beeing over. 

function gameOver() {
    body.removeEventListener('keydown', myKeyPress)
    console.log('s' + score[0], score[1]);
    if (score[0] > score[1]) {
        sBox.innerHTML = 'S is winner';
        sBox.style.backgroundImage = 'url("https://media.giphy.com/media/tsX3YMWYzDPjAARfeg/giphy.gif")';
        lBox.style.color = 'red';
        lBox.style.fontSize = '30px';
    }
    if (score[1] > score[0]) {
        lBox.innerHTML = 'L is winner';
        lBox.style.backgroundImage = 'url("https://media.giphy.com/media/tsX3YMWYzDPjAARfeg/giphy.gif")';
        lBox.style.color = 'red';
        lBox.style.fontSize = '30px';

    }
}

function start() {
    setTimeout(gameOver, (getValueInput() * 1000));
    sCounter = 0;
    lCounter = 0;
    body.addEventListener('keydown', myKeyPress)

}

function myKeyPress(e) {
    if ((e.keyCode === 83) || (e.which === 83)) sCounter++, countS.innerText = sCounter;

    if ((e.keyCode === 76) || (e.which === 76)) lCounter++, countL.innerText = lCounter;
    score = [sCounter, lCounter];
}