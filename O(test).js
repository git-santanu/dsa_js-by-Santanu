const input = [0, 1, 2, 3, 4, 5];
console.log(input.length);
const anotherFunction = () => {
  console.log("object");
};
function funChallenge(input) {
  let a = 10; //O(1)
  console.log(a);
  a = 50 + 3;//O(1)
  console.log(a);
  for (let i = 0; i < input.length; i++) {//0(n)
    anotherFunction(); //0(n)
    let stranger = true;//0(n)
    a++;//0(n)
  }
  console.log(a);//O(1)
}
funChallenge(input);
// Time complexity--> O(3+4n)