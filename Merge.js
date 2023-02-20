const dataA = [20, 30, 40, 50, 60, 70];
const dataB = [50, 60, 70, 90, 10, 30];
const mergeData = [...dataA, ...dataB];
function duplicateEl(mergeData){
return mergeData.filter((item,index)=>mergeData.indexOf(item)===index)
}
console.log(duplicateEl(mergeData));
