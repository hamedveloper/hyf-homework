//Flight Booking Full Name Function//////////////////////////////////////////////////////////////

function getFullName(firstname, surname, useFormalName) {
    if (firstname === '') {
        return 'Please write your first name'
    } else if (surname === '') {
        return 'Please write your surname'
    } else if (useFormalName) {
        return 'Lord ' + firstname + ' ' + surname;
    } else {
        return firstname + ' ' + surname;
    }
}

const fullName1 = getFullName('Hamed', 'Karachi', true);
const fullName2 = getFullName('Arman', 'Naderi', false);

console.log(fullName1);
console.log(fullName2);

//I do not understand the last section of this exercise when it said we should try out to put it in codepen


//Event Application/////////////////////////////////////////////////////////////////////////
//"i" is the parameter for how many day we have until to the event

const n = new Date().getDay();
const weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function getEventWeekday(i) {
    if (i >= 7) {
        return ((i % 7) + n) - 1;
    } else if ((i + n) === 7) {
        return 6;
    } else {
        return ((i + n) % 7) - 1;
    }
};

console.log(weekday[getEventWeekday(4)]);


//Weather wear//////////////////////////////////////////////////////////////////

function weatherTemprature(temp) {
    if (temp <= 0) {
        return 'wear a jacket and gloves with anti sliping shoes'
    } else if (temp <= 10) {
        return 'wear a jaacket with trousers'
    } else if (temp <= 20) {
        return 'wear a T-shirt with trousers'
    } else {
        return 'wear shorts and T-shirt'
    }
}

//Student Manager/////////////////////////////////////////////////////////////////

var class07Students = [];

function addStudentToClass(studentName) {
    if (studentName !== '') {
        if (class07Students.length < 6) {
            if (!class07Students.includes(studentName)) {
                class07Students.push(studentName);
            } else {
                console.log(`Student ${studentName} is already in the class`);
            }
        } else if (studentName.toLowerCase().includes('queen')) {
            if (!class07Students.includes(studentName)) {
                class07Students.push(studentName);
            } else {
                console.log(`${studentName} is already in the class`);
            }
        } else {
            console.log('Cannot add more students to class 07');
        }

    } else {
        console.log('Please write student name')
    }
}

console.log(class07Students)

addStudentToClass('Name1');
addStudentToClass('Name2');
addStudentToClass('Name3');
addStudentToClass('Name4');
addStudentToClass('Name5');
addStudentToClass('Name6');
addStudentToClass('Name7');
addStudentToClass('Queen Margaretta');


function getNumberOfStudents() {
    // You write code here
    return `there is ${class07Students.length} students in the class`;
};
console.log(getNumberOfStudents());



//Candy helper//////////////////////////////////////////////////////////////////////////////

const boughtCandyPrices = [];

function addCandy(candyType, weight) {
    if (candyType === 'Sweet') {
        var pricePerGram = 0.5;
    } else if (candyType === 'Chocolate') {
        pricePerGram = 0.7;
    } else if (candyType === 'Toffee') {
        pricePerGram = 1.1;
    } else if (candyType === 'Chewing-gum') {
        pricePerGram = 0.03;
    }
    var fee = pricePerGram * weight;
    boughtCandyPrices.push(fee);
}

addCandy('Sweet', 10);
addCandy('Sweet', 20);
addCandy('Toffee', 30);

var total = 0;
for (i = 0; i < boughtCandyPrices.length; i++) {
    total = boughtCandyPrices[i] + total;
}
console.log('total= ' + total);

var amountToSpend = Math.random() * 100;
console.log(`You have ${amountToSpend} to buy candy in total`)

function canBuyMoreCandy() {
    if (total < amountToSpend) {
        console.log('You can buy more, so Please do!')
    } else {
        console.log('Enough candy for you')
    }
}
canBuyMoreCandy();