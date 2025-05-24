const searchEl = () => {
  const data = [10, 20, 30, 40, 50, 60];
  let item = document.getElementById('search').value;
  let index = undefined;
  for (let i = 0; i <= data.length - 1; i++) {
    if (data[i] === parseInt(item)) {
      index = i;
      break;
    }else{
        alert('data not found')
        break;
    }
  }
  console.log('index',index);
};
