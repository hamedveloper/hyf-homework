// function act1(remove) {
//     console.log(0);
//     remove;
// }

// function remove() {
//     document.getElementById('but1').removeEventListener('click', act1)
//     document.getElementById('but1').addEventListener('click', setTimeout(act2(), 10));

// }

// function act2() {
//     console.log(1);
// }
// document.getElementById('but1').addEventListener('click', act1);

//////////////////////////////////////////////////////////////////////Click counter(VALENTINA)

const buttonOne = document.getElementById("clickerOne");
const buttonTwo = document.getElementById("clickerTwo");
let i = 0;
const message = () => {
    console.log(i);
    i++;
};

function Callback() {
    return message();
}
buttonOne.addEventListener("click", Callback);
buttonTwo.addEventListener("click", Callback);


/////////////////////////////////////////////////////////////////////////Delay clicker

document.getElementById('delaybut').addEventListener('click', delay);

function delay() {
    setTimeout(() => {
        console.log('This text was delayed by 3 seconds')
    }, 3000)
    document.getElementById('delaybut').removeEventListener('click', delay);
};


/////////////////////////////////////////////////////////////////////////////Page onload


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

///////////////////////////////////////////////////////////////////////////Mouse position


let info = document.getElementById('demo');
let coordinateX = 0;
let position = 0;

function tellPos(p) {
    info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;
}

// coordinateX = setInterval(tellPos, 1000);
// console.log(coordinateX);


addEventListener('mousemove', tellPos, false);


//???????????????????????why it does not work when I write document.body.addEventListener('mousemove', tellpos, false);