//given two array,let's user know (true/false) wheather
//these two array contains any common items

// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [2, 3, 8, 47, 6];

//1st approach

// const findCommonItems = (arr1,arr2) => {
// arr1.map(item1=>{
//     arr2.map(item2=>{
//         item1===item2 ? console.log('Common elements in those arrays are: ',item1 || item2): null
//     })
// })
// }
// findCommonItems(arr1,arr2);

//2nd approach
const array1 = [1, 2, 3, 4, 5,6];
const array2 = [2, 3, 8, 47,6];
function findCommonItems(arr1, arr2){
 let obj = {};
 for (let i = 0; i < arr1.length; i++) {
    if(! obj[array1[i]]){
        let item = array1[i];
        obj[item] = true
     }
 }
//  console.log(obj[array[i]])
 for (let j = 0; j < arr2.length; j++) {
    if(obj[arr2[j]]){
        console.log(obj[arr2[j]])
    }
 }
 console.log(false)
};
findCommonItems(array1, array2);