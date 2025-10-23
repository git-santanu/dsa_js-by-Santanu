const findUniqueElements = (arr) => {
    let unique = []
    for (let i = 0; i < arr.length; i++) {
        let exists = false
        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) {
                exists = true
                break;
            }
        }
        if (!exists) {
            unique.push(arr[i])
        }
    }
    return unique
}

const arr = [1, 2, 3, 2, 4, 1, 5, 55, 20, 20];

console.log(findUniqueElements(arr))