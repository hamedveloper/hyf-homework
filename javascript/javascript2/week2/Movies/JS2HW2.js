//////////////////////////////////////////////////////////////////Duplicated words

let splitTitles = movies.map(x => x.title.split(' '));
console.log(movies);

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

