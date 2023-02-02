const removeEl = () => {
  const data = [20, 30, 40, 50, 45, 12, 32, 13, 78];
  console.log(data);
  let position = document.getElementById('position').value;
  position = parseInt(position)
  for (let i = position; i < data.length - 1; i++) {
    console.log('data[i] ',data[i] )
    data[i] = data[i + 1];
    console.log('data[i]> ',data[i] )
  }
  console.log('after loop',data);
  console.log('Now data lenght>',data.length)
  data.length = data.length - 1; // cz last item comes twice
  console.log('so data lenght reduced>',data.length)
  console.log(data);
};

