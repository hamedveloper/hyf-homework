const searchKey = document.getElementById('getGif')
const getGifBtn = document.getElementById('btnSearch')
const getNumber = document.getElementById('getNumber')
const pictureBox = document.getElementById('pictureBox')

getGifBtn.addEventListener('click', onClickSearch)

getNumber.addEventListener('input', onClickSearch)

const giphyData = async (searchKey, searchNumber) => {
const API_KEY = "92CWtdMWMOYaLWV6sKMC3WZgM6grBT4l";
    const data = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchKey}&limit=${searchNumber}&offset=0&rating=g&lang=en`)
        .then((response) => response.json());
return data;
};






async function onClickSearch() {

    pictureBox.innerHTML = '';

    let search = searchKey.value;

    console.log(giphyData(search, 50))
    //let image = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=92CWtdMWMOYaLWV6sKMC3WZgM6grBT4l&q=${search}&limit=50&offset=0&rating=g&lang=en`)
    //let imageFinal = await image.json()

    //console.log(imageFinal);

    for (let i = 0; i < 50; i++) {


        let ul = document.createElement('ul')

        pictureBox.appendChild(ul)

        let picHolder = document.createElement('img')

        picHolder.src = giphyData(search, 50).data[i].images.downsized.url;
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