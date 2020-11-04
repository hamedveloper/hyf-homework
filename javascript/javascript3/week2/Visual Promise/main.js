const red = document.querySelector('ul.marks li:nth-child(1)');
const blue = document.querySelector('ul.marks li:nth-child(2)');
const green = document.querySelector('ul.marks li:nth-child(3)');

function translateAllAtOnce() {

    moveElement(red, {
        x: 20 - parseInt(red.style.left),
        y: 300 - parseInt(red.style.top)
    }), moveElement(blue, {
        x: 400 - parseInt(blue.style.left),
        y: 300 - parseInt(blue.style.top)
    }), moveElement(green, {
        x: 400 - parseInt(green.style.left),
        y: 20 - parseInt(green.style.top)
    }).then(() => {
        console.log('Elements has been moved');
    });

};

function translateOneByOne() {

    moveElement(red, {
        x: 20 - parseInt(red.style.left),
        y: 300 - parseInt(red.style.top)
    }).then(() => {
        moveElement(blue, {
            x: 400 - parseInt(blue.style.left),
            y: 300 - parseInt(blue.style.top)
        }).then(() => moveElement(green, {
            x: 400 - parseInt(green.style.left),
            y: 20 - parseInt(green.style.top)
        })).then(() => console.log('Elements has been moved'))
    })
}
translateAllAtOnce()
//translateOneByOne()