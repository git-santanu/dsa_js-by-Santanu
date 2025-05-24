//-----Traversing data------
const data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];
// data.map(item=>console.log(item));
for (let i = 0; i < data.length; i++) {
  console.log(`Index ${i} is ${data[i]}`);
}
const getData = () => {
  let id = document.getElementById("input").value;
  if (id === "") {
    alert("plese input a number");
  } else if (id < data.length) {
    alert(`data: ${data[id]}`);
  } else {
    alert("plese input valid number");
  }
};
