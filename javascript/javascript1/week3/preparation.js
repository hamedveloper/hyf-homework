//Array preparation

const arrNum = [30, 35, 34, 45, 51];

/*Point1. You can change const's content when it is reffered to an array or object. because array or 
opbject has a constant adress in the memory and when we just change inside of them still the adress
is not changed and we do not receive any error. but if you const a string and we change the string
addrees of content of string would be changed and we will receive an error.*/


arrNum.push(6);
arrNum.unshift(0);
console.log(arrNum.length);
arrNum.pop();
arrNum.shift();

console.log(arrNum.length);

for (i = 0; i < arrNum.length; i++) {
    console.log(arrNum[i]);
}

for (const val of arrNum) {
    console.log(val);
    /*Const of just refers to values in compared with for loop that foor loop refers to 
    indexes*/
}

console.log(arrNum.toString());
console.log(arrNum.join(';'));

if (arrNum.includes(1)) {
    console.log('finally I find 1 in the array')
} else {
    console.log('I can not find it');
}

//Array of your classmates by object

const myClassmates = [student1 = {
    name: 'hamed',
    age: 38
}, student2 = {
    name: 'heema',
    age: 25
}, student3 = {
    name: 'ali',
    age: 30
}, atudent4 = {
    name: 'karolina',
    age: 30
}, student5 = {
    name: 'gary',
    age: 35
}];

console.log(myClassmates);

//Find Ali in classmates

for (i = 0; i < myClassmates.length; i++)
    if (myClassmates[i].name == 'ali') {
        console.log('here is ali in the ' + i + 'th position of array');
    }

//Change of the second classmate age

myClassmates[1].age = 34;

//check if the object is empty

function isEmpty(obj) {
    return Object.keys(obj).length === 0; //or Object.values(obj).length === 0; or with hasOwnProperty()
}


//In class exercise object

// Exercise #1

let cat = {
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting: function () {
        //console.log('Meow!');
        return 'Meow'
    }
}


// 1. Create a variable `catName`, use bracket notation to get the value of the 'name' property of `cat`

console.log(cat['name']);

// 2. Run the greeting() method using dot notation (it will log the greeting to the browser DevTools' console).

console.log(cat.greeting());

//point2: if there is no any 'return' in greeting function it would come undefined in console 

// 3. Update the `color` property value to `black`.

cat.color = 'black';
console.log(cat);


// Exercise #2
// Create an object to represent one of your favourite bands. The required members are:

const myFavoritBand = {
    name: 'Queen',
    nationality: 'England',
    genre: 'rock',
    members: 4,
    formed: 1970,
    split: 1997,
    albums: [album1 = {
        name: 'A night at the Opera',
        released: 1975
    }, album2 = {
        name: 'Jazz',
        released: 1978
    }, album3 = {
        name: 'The game',
        released: 1980
    }]
}

const bandIndo = `British ${myFavoritBand.genre} band ${myFavoritBand.name} which is formed on ${myFavoritBand.formed} consisted of vocalist Freddie Mercury (d. 1991), guitarist Brian May, drummer Roger Taylor, and bassist John Deacon (r. 1997)`;
console.log(bandIndo);