let searchKey = document.getElementById('getGif')
let getGifBtn = document.getElementById('btnSearch')
let getNumber = document.getElementById('getNumber')
let pictureBox = document.getElementById('pictureBox')

getGifBtn.addEventListener('click', giphy)

getNumber.addEventListener('input', giphy1)

async function giphy() {

    pictureBox.innerHTML = '';

    let search = searchKey.value;

    let image = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=92CWtdMWMOYaLWV6sKMC3WZgM6grBT4l&q=${search}&limit=50&offset=0&rating=g&lang=en`)
    let imageFinal = await image.json()

    console.log(imageFinal);

    for (let i = 0; i < 50; i++) {

        let ul = document.createElement('ul')

        pictureBox.appendChild(ul)

        let picHolder = document.createElement('img')

        picHolder.src = imageFinal.data[i].images.downsized.url;
        ul.appendChild(picHolder)
    }
}

async function giphy1() {

    pictureBox.innerHTML = '';

    let search = searchKey.value;
    let number = getNumber.value;
    console.log(number);

    let image = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=92CWtdMWMOYaLWV6sKMC3WZgM6grBT4l&q=${search}&limit=${number}&offset=0&rating=g&lang=en`)
    let imageFinal = await image.json()

    for (let i = 0; i < number; i++) {
        let ul = document.createElement('ul')

        pictureBox.appendChild(ul)
        let picHolder = document.createElement('img')

        picHolder.src = imageFinal.data[i].images.downsized.url;
        ul.appendChild(picHolder)
    }

}