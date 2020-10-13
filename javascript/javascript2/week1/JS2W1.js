////////////////////////////////////////////////////////////Find the shortest word

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
const number = [];

function findTheShortest(words) {
    for (let i = 0; i < words.length; i++) {
        number.push(danishWords[i].length);
    }
    let index = number.indexOf(Math.min.apply(Math, number));
    return words[index];
};

console.log(findTheShortest(danishWords));

///////////////////////////////////////////////////////////////////////Find and count the Danish letters



function findDanishLetters(danish) {
    const danishLetters = {
  "å": 0, 
  "æ": 0,
  "ø": 0
}
    for (let i = 0; i < danish.length; i++) {  
        let letter = danish.substring(i, i + 1);
        if (letter === 'å') {
            (danishLetters.å)++;
        } else if (letter === 'æ') {
            (danishLetters.æ)++;
        } else if (letter === 'ø') {
            (danishLetters.ø)++;
        }
    };
    return `total: ${(danishLetters.å)+(danishLetters.æ)+(danishLetters.ø)}, å: ${danishLetters.å}, ø: ${danishLetters.ø}, æ:${danishLetters.æ}`;
};

const danishString = 'Jeg har en blå bil';
console.log(findDanishLetters(danishString)); 

const danishString2 = 'Blå grød med røde bær';
console.log(findDanishLetters(danishString2));

//////////////////////////////////////////////////////////////////Spirit animal name generator

const spiritAnimal = ['The big cow', 'The ugly bat', 'The strong bear', 'The happy butterfly', 'The charming cat', 'The magic dragon', 'The lovely dog', 'The calm fox', 'The wild jaguar', 'The amzing panda'];

const but = document.getElementById("button");

function getName() {
    let name = document.getElementById("input").value;
    document.getElementById('div').innerText = `${name}: ${name}-${getSpiritName()}`;
};

function getSpiritName() {
    return spiritAnimal[(Math.floor(Math.random() * 10))];
};

function newString() {
    if (document.getElementById("input").value === '') {
        document.getElementById('div').innerText = `Please Put Your Name In Inbox`
    } else {
        document.getElementById('div').innerText = `${name}: ${name}-${getSpiritName()}`;
    }
};

document.querySelector('#spiritSelect').addEventListener("change", operation);

function operation(e) {
    if ((e.target.value) === 'clickButton') {
        document.getElementById("input").removeEventListener('mouseover', getName);
        document.getElementById("input").removeEventListener('input', getName);
        but.addEventListener('click', getName);
    } else if ((e.target.value) === 'hovered') {
        but.removeEventListener('click', getName);
        document.getElementById("input").removeEventListener('input', getName);
        document.getElementById("input").addEventListener('mouseover', getName);
    } else if ((e.target.value) === 'textWritten') {
        document.getElementById("input").removeEventListener('mouseover', getName);
        but.removeEventListener('click', getName);
        document.getElementById("input").addEventListener('input', getName);
    }
};