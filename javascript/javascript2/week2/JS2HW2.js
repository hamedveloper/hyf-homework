//////////////////////////////////////////////////////////////////Duplicated words
// // First mistake: forEach returns nothing
// testArray = [1, 3, 4, 6, 3]
// let withForEach = testArray.forEach(myElement => myElement += 2)
// let withMap = testArray.map(myElement => myElement += 2)
// console.log(testArray)
// console.log(withForEach)
// console.log(withMap)

let splitTitles = movies.map(x => x.title.split(' '));
//console.log(splitTitles);
console.log(movies);
// let findDuplicates = splitTitles.map((oneSplitedTitle, index2) => {
//     let hasDoubledWord = oneSplitedTitle.forEach((word, index1) => oneSplitedTitle.indexOf(word) != index1 && (index1 => index1)); //oneSplitedTitle.indexOf(word) != arr.filter((item, index) => x.indexOf(item) != index)));
//     // console.log(hasDoubledWord, index2)
//     return (hasDoubledWord)
//     //console.log(hasDoubledWord.filter(eachMovie => eachMovie != []))
// })

//Due to the First mistake(look line 2): forEach should be replaced with map
//Remember that array.map is not going to change array. in order to have the resultes you should assign the results into a new variable(here we saved results in hasDoubledWord)
// oneSplitedTitle = splitTitles[1]
// console.log(oneSplitedTitle)
// let hasDoubledWord = oneSplitedTitle.map((word, index1) => oneSplitedTitle.indexOf(word) != index1 && index1);
// console.log(hasDoubledWord)


//Second step. in previous step we got an array of False unles there is a duplicated word. So we filter this array just for those that are not false.
//Again, remember that to get the results you should save the data in a new variable because filter is not going to change your original array.
// oneSplitedTitle = splitTitles[1]
// console.log(oneSplitedTitle)
// let hasDoubledWord = oneSplitedTitle.map((word, index1) => oneSplitedTitle.indexOf(word) != index1 && index1);
// let evaluationResult = hasDoubledWord.filter(hasDoubledWord => hasDoubledWord == false ? false : true)
// console.log(evaluationResult)

//Step3. Now we want to perform the job on all of the titles 
// splitTitles.forEach(oneSplitedTitle => {
//     let hasDoubledWord = oneSplitedTitle.map((word, index1) => oneSplitedTitle.indexOf(word) != index1 && index1);
//     let evaluationResult = hasDoubledWord.filter(hasDoubledWord => hasDoubledWord == false ? false : true)
//     console.log(evaluationResult)
// })


//Step4. Please note that in the last step we just did some work in according to each element of splitTitles. We have not saved the data in a new array.
//Then lets save the results in an array. you may think that by just assigning the results of forEach into a new variable you are done.
//Then lets try it.
// let specialTitles = splitTitles.forEach(oneSplitedTitle => {
//     let hasDoubledWord = oneSplitedTitle.map((word, index1) => oneSplitedTitle.indexOf(word) != index1 && index1);
//     let evaluationResult = hasDoubledWord.filter(hasDoubledWord => hasDoubledWord == false ? false : true)
//     // console.log(evaluationResult)
// })
// console.log(specialTitles)

//Step5. But You see that SpecialTitle is undefined because forEach returns nothing. Then we should use map
// let specialTitles = splitTitles.map(oneSplitedTitle => {
//     let hasDoubledWord = oneSplitedTitle.map((word, index1) => oneSplitedTitle.indexOf(word) != index1 && index1);
//     let evaluationResult = hasDoubledWord.filter(hasDoubledWord => hasDoubledWord == false ? false : true)
//     // console.log(evaluationResult)
// })
// console.log(specialTitles)

//step6. But again line 60 returns undefined. Because in the map we have not returned anything. then
// let specialTitles = splitTitles.map(oneSplitedTitle => {
//     let hasDoubledWord = oneSplitedTitle.map((word, index1) => oneSplitedTitle.indexOf(word) != index1 && index1);
//     let evaluationResult = hasDoubledWord.filter(hasDoubledWord => hasDoubledWord == false ? false : true)
//     return (evaluationResult)
// })
// console.log(specialTitles)

// step7. Now lets return index of the film instead of just a random number
// let specialTitles = splitTitles.map((oneSplitedTitle, index) => {
//     let hasDoubledWord = oneSplitedTitle.map((word, index1) => oneSplitedTitle.indexOf(word) != index1 && index1);
//     let evaluationResult = hasDoubledWord.filter(hasDoubledWord => hasDoubledWord == false ? false : true)
//     if (evaluationResult.length == 0) {
//         return (false)
//     } else {
//         return (index)
//     }
// })
// console.log(specialTitles)

//Step8. This is the easiest step. We just need to filter the array of the last step.
let specialTitles = splitTitles.map((oneSplitedTitle, index) => {
    let hasDoubledWord = oneSplitedTitle.map((word, index1) => oneSplitedTitle.indexOf(word) != index1 && index1);
    let evaluationResult = hasDoubledWord.filter(hasDoubledWord => hasDoubledWord == false ? false : true)
    if (evaluationResult.length == 0) {
        return (false)
    } else {
        return (index)
    }
})
specialTitles = specialTitles.filter(specialTitles => specialTitles != false)
console.log(specialTitles);

//let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
// console.log(findDuplicates)
//let ccccc = findDuplicates.filter((eachLine, index) => (eachLine != []) ? return() : '1' )
//console.log(ccccc);
//console.log(findDuplicates(splitTitles))