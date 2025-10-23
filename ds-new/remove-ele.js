const removeElement = (n) => {
  let x = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] > n[x]) {
      x = x + 1;
      n[x] = n[i];
    }
  }
  let unique = [];
  for (let j = 0; j <= x; j++) {
    unique[j] = n[j];
  }
  return { no_unique_elements: x + 1, unique };
};
const arr = [1, 2, 2, 3, 3, 4, 4, 4, 4, 5];
const res = removeElement(arr);
console.log(res);
//expected output: 5, [1,2,3,4,5]
