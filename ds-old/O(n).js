// Linear time complexity--> O(n)
const data = ["Meno"];
const dataA= new Array(100).fill('Meno')
const findData = (array) => {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === "Meno") {
      console.log("Meno found");
    }
  }
};
findData(dataA);


