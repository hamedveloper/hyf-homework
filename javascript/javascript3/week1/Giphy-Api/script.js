const searchKey = document.getElementById('getGif')
const getGifBtn = document.getElementById('btnSearch')
const getNumber = document.getElementById('getNumber')
const pictureBox = document.getElementById('pictureBox')

getGifBtn.addEventListener('click', onClickSearch)

getNumber.addEventListener('input', onClickSearch1)

const giphyData = async (searchKey, searchNumber) => {
const API_KEY = "92CWtdMWMOYaLWV6sKMC3WZgM6grBT4l";
    const data = await (await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchKey}&limit=${searchNumber}&offset=0&rating=g&lang=en`)).json();
return data;
};

async function onClickSearch() {
    pictureBox.innerHTML = '';

    let search = searchKey.value;

    let giphyPictures = giphyData(search, 50)

    for (let i = 0; i < 50; i++) {

        let ul = document.createElement('ul')

        pictureBox.appendChild(ul)

        let picHolder = document.createElement('img')

        picHolder.src = (await giphyPictures).data[i].images.downsized.url;
        ul.appendChild(picHolder)
    }
}

async function onClickSearch1() {

    pictureBox.innerHTML = '';

    let search = searchKey.value;
    let number = getNumber.value;

    let giphyPictures1 = giphyData(search, number)

    for (let i = 0; i < number; i++) {
        let ul = document.createElement('ul')

        pictureBox.appendChild(ul)
        let picHolder = document.createElement('img')

        picHolder.src = (await giphyPictures1).data[i].images.downsized.url;
        ul.appendChild(picHolder)
    }

}