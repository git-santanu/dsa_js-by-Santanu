const input = [0, 1, 2, 3, 4, 5];
console.log(input.length);
const anotherFunction = () => {
  console.log("object");
};
function funChallenge(input) {
  let a = 10;
  console.log(a);
  a = 50 + 3;
  console.log(a);
  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  console.log(a);
}
funChallenge(input);
