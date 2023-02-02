//-----Insert data to a specific position-----
//-----* newdata 30 to be placed at the position of index 3 *-----

// const data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];
// let newData = 30;
// let position = 3;
// for (let i = data.length-1; i >=0; i--) {
//     // console.log(data[i])
//     if(i>=position){
//         data[i+1]= data[i];
//         if(i==position){
//           data[i]= newData
//         }
//     }
// }
// console.log(data)
const insertElm = () => {
  const data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];
  let newData = document.getElementById('elm').value;
  let position = document.getElementById('pos').value;
  console.log('prev data>',data)
  for (let i = data.length - 1; i >= 0; i--) {
    if (i >= position) {
      data[i + 1] = data[i];
      if (i == position) {
        data[i] = newData;
      }
    }
  }
  console.log('New data>',data)
};
