const str = "Hey there! this is Santanu";

const reverseFunc = (str) => {
  let myArray = [];
  for (let i = str.length - 1; i >= 0; i--) {
    myArray.push(str[i]);
  }
  console.log(myArray);
};
reverseFunc(str);
//2nd approach
const reverse2Func = str => console.log(str.split("").reverse().join(""))

reverse2Func(str);

