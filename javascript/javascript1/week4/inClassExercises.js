////////////////////////////////////////////////////////////////////Fizz Buzz


function number(x1, x2) {
    let num = x1;
    console.log(num);
    for (let i = x1; i < x2; i++) {
        num += 1;
        if ((num % 5 === 0) && (num % 3 === 0)) {
            console.log('FizzBuzz');
        } else if (num % 5 === 0) {
            console.log('Buzz');
        } else if (num % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(num);
        }
    }
}
number(4, 12);

/////////////////////////////////////////////////////////////////Build a sentiment analyzer

const positiveWords = ['happy', 'awsome', 'super', 'love', 'like', 'smile'];
const negativeWords = ['hate', 'dislike', 'boring', 'tired', 'sad', 'awful'];
const answer = {};
answer.positiveWords = [];
answer.negativeWords = [];

function sentimentScoreObject(sentence) {
    let ncounter = 0;
    let pcounter = 0;
    for (let i = 0; i < positiveWords.length; i++) {
        if (sentence.search(positiveWords[i]) !== -1) {
            pcounter += 1;
            answer.positiveWords.push(positiveWords[i]);
        }
    }
    for (let i = 0; i < negativeWords.length; i++) {
        if (sentence.search(negativeWords[i]) !== -1) {
            ncounter += 1;
            answer.negativeWords.push(negativeWords[i]);
        }
    }
    answer.score = pcounter - ncounter;
}
sentimentScoreObject('I am verry happy and boring');
console.log(answer);

//console.log(sentimentScoreObject);
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/


///////////////////////////////////////////////////////////Credit card number formatter

let formatted
let seperator = 4;

function formatCreditCardNumber(num) {
    if (typeof (num) !== 'number') {
        return 'Please Insert your card number';
    } else {
        num = num.toString();
        let seperatesCounter = 0;
        if ((num.length % seperator) === 0) {
            seperatesCounter = Math.floor(num.length / seperator);
        } else {
            seperatesCounter = Math.floor(num.length / seperator) + 1;
        }
        formatted = '';
        for (let i = 0; i < seperatesCounter; i++) {
            formatted += (num.substring(0, seperator) + " ");
            num = num.substring(seperator);
        }
        return formatted;
    }
};

const formattedCreditCardObject = formatCreditCardNumber(123456789);
console.log(formattedCreditCardObject);


//////////////////////////////////////////////////////////////////Character frequencies

const characters = [];


function getCharacterFrequencies(words) {
    for (let count = 1; count < words.length + 1; count++) {
        var n = words.substring(count - 1, count);
        var counter = 0;
        for (let i = 1; i < words.length + 1; i++) {
            if (n === words.substring(i - 1, i)) {
                counter = counter + 1;
            }
        }
        characters.push({
            character: words.substring(count - 1, count),
            count: counter,
        });
    }
}
getCharacterFrequencies('happy');
console.log(characters);

/////////////////////////////////////////////////////////////////Palindromic substring

//I will make this section in the following week

//////////////////////////////////////////////////////////////////Credit card info

function getCardInfo(card) {

    amount = card.toString().length;

    console.log(amount);

    if (card.toString().substring(0, 1) === '4' && ((amount === 13) || (amount === 16))) {
        return 'Visa';
    } else if ((card.toString().substring(0, 2) === '34') || (card.toString().substring(0, 2) ===
            '37')) {
        return 'American Express';
    } else if ((card.toString().substring(0, 2) === '51' || '52' || '53' || '54' || '55') && (amount === 16)) {
        return 'Master card'
    }
};

console.log(getCardInfo(5181321334789000));

////////////////////////////////////////////////////////////////////////////Tic Tac Toe

//I will make this section in the following week