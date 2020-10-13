//////////////////////////////////////////////////////////////////Duplicated words

let splitTitles = movies.map(x => x.title.split(' '));
console.log(movies);

let specialTitles = splitTitles.map((oneSplitedTitle, index) => {
    let DoubledWord = oneSplitedTitle.map((word, index) => {
        if ((oneSplitedTitle.indexOf(word)) !== index){
            return index;
        }
})
    let evaluationResult = DoubledWord.filter(doubledWord => doubledWord)
    if (evaluationResult.length == 0) {
        return (false)
    } else {
        return (index)
    }
})
specialTitles = specialTitles.filter(specialTitles => specialTitles != false)
console.log(specialTitles);

