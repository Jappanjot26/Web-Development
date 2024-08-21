// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));
*/

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // value:prompt('Degrees Celcius:'),
    //C) FIX
    value: 10,
  };

  // console.log(measurement)//We can identify that value is string
  //B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//A) Identify
console.log(measureKelvin());

//using debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    //debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

//A) IDENTIFY
console.log(amplitudeBug);

//coding challenge

//Questions
//1.how to input array
//2.how to print with literals

//sub problems
// 1.input array
// 2. print string as 1st element of array with 1 as number

const printForecast = function (arr) {
  let final_str = '... ';
  let str;
  for (let i = 1; i <= arr.length; i++) {
    str = `${arr[i - 1]}°C in ${i} days ... `;
    final_str += str;
  }
  console.log(final_str);
};
printForecast([17, 21, 23]);
