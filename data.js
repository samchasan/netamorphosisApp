const csv = require('csv-parser');
const fs = require('fs');
const data = []


fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    // console.log(i);
    let month = row['Date of Contact']
    // month.toString()
    let number = month.slice(5,7)
    console.log(number)
    data.push(number)
    i ++
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    // console.log(data)
    count(data)
  });


const count = (months) =>  {
    months.sort();
    let count = {};
    months.forEach(function(i) { count[i] = (count[i]||0) + 1;});

    console.log(count);

}