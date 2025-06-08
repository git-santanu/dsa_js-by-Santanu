const arr = [1, 3, 10, 50, 9, 34, 25, 100, 255] // search the index of 9

// mid = (l+h)/2
// (mid === target) return arr[mid]
// (target > arr[mid]) l= mid +1
// (target < arr[mid]) h = mid -1
// check upto l <=h
// if not found return -1

const searchElement = (arr, target) => {
    for(let i=0; i< arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}

const res = searchElement(arr, 9)
console.log(res)

const binarySearchElement = (arr, target) => {
 let st = arr[0];
 let end = arr.length -1
 while (st <= end) {
    const mid = Math.floor((st+end)/2)
    if (target === arr[mid]) {
        return mid
    } else if (target < arr[mid]) {
        end = mid -1
    } else {
        st = mid +1
    }
 }
 return -1
}

const res1 = binarySearchElement([...arr].sort((a, b) => a - b), 9)
console.log(res1)



