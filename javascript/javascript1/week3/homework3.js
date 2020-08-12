////////////////////////////////////////////////////////////////////////////item array removal

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// Write some code here

for (var i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove) {
        names.splice(i, 1);
    }
}
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']


/////////////////////////////////////////////////////////////////////////When we will be there

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function durationTime(infoArray) {

    var hourse = Math.floor(infoArray.destinationDistance / infoArray.speed);
    var minutes = Math.floor(((infoArray.destinationDistance / infoArray.speed) - hourse) * 60);
    return hourse + ' hourse and ' + minutes + ' minutes';

}
const travelTime = durationTime(travelInformation);
console.log(travelTime);


////////////////////////////////////////////////////////////////////Series duration of my life

const seriesDurations = [{
        title: 'Friends',
        days: 4,
        hours: 2,
        minutes: 20,
    },
    {
        title: 'How I met your mother',
        days: 7,
        hours: 6,
        minutes: 36,
    },
    {
        title: 'Lost',
        days: 11,
        hours: 0,
        minutes: 36,
    }
]

let total = 0;

function logOutSeriesText() {
    for (let i = 0; i < seriesDurations.length; i++) {
        var timeInMinutes = ((seriesDurations[i].days) * 24 * 60) + ((seriesDurations[i].hours) * 60) + seriesDurations[i].minutes;
        console.log(seriesDurations[i].title + ' took ' + ((timeInMinutes / (80 * 356 * 24 * 60)) * 100).toFixed(2) + '% of my life.');
        total += Number(((timeInMinutes / (80 * 356 * 24 * 60)) * 100).toFixed(2));

    }
    console.log(`In total that is ${total}% of my life.`)
}

logOutSeriesText(); // logs out the text found above


//////////////////////////////////////////////////////////////////////////////////save a note

const notes = [];

function saveNote(content, id) {
    notes.push({
        content,
        id
    });
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (id === '' || id === isNaN() || isNaN(id)) {
            return 'Error: Please write a number';
        } else if (notes[i].id === id) {
            return 'content: ' + notes[i].content + ', id: ' + id;
        }
    }
};

const firstNote = getNote(2);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log('The note with id: ' + notes[i].id + ', has the following note text: ' + notes[i].content + '.');
    }
};


logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry


//////////////////////////////////////////////////CactusIO-interactive (Smart phone usage app)

//Adding activities

const activities = [];
const limit = 30;

function addActivity(date, activity, duration) {
    activities.date = date;
    activities.activity = activity;
    activities.duration = duration;
    activities.push({
        date,
        activity,
        duration
    })
}


addActivity('23/12-2009', 'google', 50);

console.log(activities);

//Show my Status
let totalTime = 0;

function showStatus() {
    for (i = 0; i < activities.length; i++) {
        totalTime += (activities[i].duration);
        console.log(totalTime);
        if (totalTime > limit) {
            console.log('You have reached your limit, no more smartphoning for you');
        }
    }
    console.log('You have added ' + activities.length + ' activities. They amount to ' + totalTime + ' min. of usage');

}

showStatus();