const arr = [-1, 3, 10, 50, 9, 34, 25, 100, 255]

const negativesCount = (arr) => {
for(let i=0; i< arr.length; i++) {
    let count =0
    if(arr[i] < 0) {
        count+=1
    }
    return count
}
}
const res = negativesCount(arr)
console.log(res)