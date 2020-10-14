/////////////////////////////////////////////////////////////////Favorit Dishes

const favDish = ['piza', 'pasta', 'burger', 'sandwich', 'salad'];

const webPage = document.querySelector('body');
const listFavFood = document.createElement('ul');
listFavFood.innerHTML = 'My Favorit Foods'
webPage.appendChild(listFavFood);

for (let i = 0; i < favDish.length; i++) {
    const listFav = document.createElement('li');
    listFav.innerHTML = favDish[i];
    listFavFood.appendChild(listFav);
};

//////////////////////////////////////////////////////////////////////////////Podcast

const podcasts = [{
        name: 'The mystery om of Johan Klausen Varbourg',
        imageUrl: 'https://picsum.photos/536/354'
    },
    {
        name: 'Tips about dogs with small legs',
        imageUrl: 'https://picsum.photos/536/354'
    },
    {
        name: 'You, me, we and us',
        imageUrl: 'https://picsum.photos/536/354'
    },
    {
        name: 'Breakfast news - Dinner edition'
    }
];

const page = document.querySelector('body');
const cast = document.createElement('ul');
cast.innerHTML = 'Podcast';
page.appendChild(cast);

for (let i = 0; i < podcasts.length; i++) {
    const list = document.createElement('li');
    const head = document.createElement('h1');
    head.innerText = podcasts[i].name;
    list.appendChild(head);
    cast.appendChild(list);
    if (podcasts[i].imageUrl !== undefined) {
        const image = document.createElement('IMG');
        image.src = podcasts[i].imageUrl;
        list.appendChild(image);
    };
};

//////////////////////////////////////////////////////////////////////////image inserter


function imageInserter(imageUrl, elementToAppendImageTo) {
    const image = document.createElement('IMG')
    image.src = imageUrl;
    elementToAppendImageTo.appendChild(image);
}
imageInserter('https://picsum.photos/536/355', document.querySelector('body'));


/////////////////////////////////////////////////////////////////////////////Simple eventlistener


document.getElementById('but').addEventListener('click', function onclick() {
    document.getElementById('but').innerHTML = 'Button clicked';
});

///////////////////////////////////////////////////////////////////////Light mode dark mode

document.body.style.backgroundColor = 'white';
document.body.style.Color = 'black';

function changeTextLight() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    button.removeEventListener('click', changeTextLight);
    button.addEventListener('click', changeTextDark);
}

function changeTextDark() {
    document.querySelector('body').style.backgroundColor = 'white';
    document.body.style.color = 'black';
    button.removeEventListener('click', changeTextDark);
    button.addEventListener('click', changeTextLight);
}

const button = document.getElementById('light');

if (document.body.style.backgroundColor === 'white') {

    button.addEventListener('click', changeTextLight);

} else {

    button.addEventListener('click', changeTextDark);
};