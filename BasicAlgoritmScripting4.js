function findLongestWordLength(str) {
    let arr = str.split(' ')
    let number = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > number) {
            number = arr[i].length
        }
    }
    return number;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");