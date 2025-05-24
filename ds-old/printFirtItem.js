const items = [1, 2, 3, 4, 5];
console.log('len>',items.length)
const firstItem = (items) => {
  console.log(items[0]);

  let middleIndex = Math.floor(items.length / 2);
  console.log('middleIndex',middleIndex);
  let index = 0;
  while (index < middleIndex) {
    console.log(">>", items[index]);
    index++;
  }
  for (let i = 0; i < 10; i++) {
    console.log("hi");
  }
};
firstItem(items);
