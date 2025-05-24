const arra1 = [2 ,3 , 5, 8]
const arra2 = [10 ,20 , 2, 1]
// merge
const mergeArr = [...arra1, ...arra2]
// unique
const uniqueElementsArr = [...new Set(mergeArr)]
for (i = 0; i < uniqueElementsArr.length; i++) {
   for(j = i +1 ; j< uniqueElementsArr.length; j++) {
    if (uniqueElementsArr[i] > uniqueElementsArr[j]) {
        // swap b/w index
        let temp = uniqueElementsArr[i];
        uniqueElementsArr[i] = uniqueElementsArr[j]
        uniqueElementsArr[j] =  temp
    }
   }
}
console.log(uniqueElementsArr)