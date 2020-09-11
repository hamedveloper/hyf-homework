//all about array methods consisted of foreach(), map(), reduce(), filter(), reject()


const arr = [1, 2, 3, 4, 5, 7];
const arr2 = [];
const filtered = arr.filter(x => x < 4);
console.log(filtered);
console.dir(arr2);


////////////////////////////////////////////////////////////inClass Exercises for Foreach

/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */


function generateListings(numberOfListings) {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];

    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for (let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];

            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);

    }

    return listings;
}

let newList = [];
let mapList = [];
let cheapList = [];
let expensiveMapList = [];
let expensiveList = [];
let parking = [];


//Compare push() and map() at home...................................
//some methods mutete the array and some of them not mutate the array and not change them
//there is no possibility in the arrow functions that 
//you can print out this object in spite of the traditional function


newList.forEach(x => console.log(x.size));
mapList = newList.map(x => x.price);
cheapList = newList.filter(x => x.price < 800);
console.log(newList);

const exp = newList
    .filter(x => x.price > 1000)
    .map(x => x.price);

parking = newList
    .filter(x => x.facilities.includes('Parkering'));

console.log(mapList);
console.log(cheapList);
console.log(expensiveMapList);
console.log(expensiveList);
console.log(parking);
console.log(exp);

//const farmListings = filterListings(listings, filter);
/////////////////////////////////////////////////////////////////Filter Listing

newList = generateListings(37);
console.log(generateListings(37));

const filter = {
    type: 'Farm',
    facilities: 'Parkering'
};
const filterArr = [filter.type, filter.facilities, filter.price, filter.hasGarden, filter.size]
// const firstFilter = ;
// const secondFilter = ;
// // const thirdFilter = ;
// const fourthFilter = filter.hasGarden;
// const fifthFilter = filter.size;

const appliedFilterArr = filterArr.filter(filter => filter);
console.log(appliedFilterArr)

function filterListing(listings, appliedFilter) {
    //The function should support these filters: type, facilities, price , hasGarden and size
    listings = newList;
    appliedFilter = appliedFilterArr;

    console.log(appliedFilter.filter(filter => listings
        .filter(listing => console.log('fff', listing)))); //listing.type === filter


    console.log(appliedFilterArr)

    // console.log(listings 
    //     .filter(x => x.type === firstFilter)
    //     .filter(x => x.facilities.includes(secondFilter)));


};

const giveList = document.getElementById('but');
giveList.addEventListener('click', filterListing)


///////////////////////////////////////////////////////////////////////////////Render Listing