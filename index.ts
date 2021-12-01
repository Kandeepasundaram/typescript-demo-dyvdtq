let monthVal = 9;
let dateVal = 5;
let yearVal = '2018';
let arr: string[] = [];

let month = '' + monthVal;
let date = '' + dateVal;
for (let i = 0; i < 2; i++) {
  let year = yearVal;

  if (i % 2 != 0 && monthVal < 10) {
    month = '0' + monthVal;
  }

  for (let j = 0; j < 2; j++) {
    if (j % 2 != 0 && dateVal < 10) {
      date = '0' + dateVal;
    }

    for (let k = 0; k < 2; k++) {
      if (k % 2 != 0 && year.length > 2) {
        console.log('slicing');
        year = yearVal.slice(-2);
      }
      arr.push(month + date + year);
      arr.push(year + month + date);
      console.log('template is : ' + month + ' : ' + date + ' : ' + year);
    }
  }
}

console.log(arr);
console.log('size before removing duplicates: ' + arr.length);
let result = [...new Set(arr)];
console.log(result);
console.log('size after removing duplicates: ' + result.length);

console.log('------------------------------------');
result.forEach((el) => console.log(el));
console.log(result.join('|'));
