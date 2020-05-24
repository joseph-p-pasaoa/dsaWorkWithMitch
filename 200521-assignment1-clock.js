/*
Create a function or method that when given a time
(a string in HH:MM format) give this smallest angle
created between the hour and minute hands on a
circular wall clock.
*/


const getShorterAngleBetweenHands = (input) => {
    // HELPER FUNCTIONS
    const getMinsHandLocation = (string) => {
      const minsInput = Number(string.split(':')[1]);

      const minsPerRevolution = 60;
      const degsPerMinute = 360 / minsPerRevolution;
      return minsInput * degsPerMinute;
    }

    const getHrsHandLocation = (string) => {
      const timeInput = string.split(':');
      const [ hrsInput, minsInput ] = timeInput.map(str => Number(str));
      const minsFromZero = (
        hrsInput === 12
          ? 0
          : hrsInput
        ) * 60 + minsInput;

      const minsPerRevolution = 60 * 12;
      const degsPerMinute = 360 / minsPerRevolution;
      return minsFromZero * degsPerMinute;
    }


  // MAIN EXECUTE
  const minsHandLocation = getMinsHandLocation(input);
  const hrsHandLocation = getHrsHandLocation(input);

  const directDiff = Math.abs(minsHandLocation - hrsHandLocation);
  const indirectDiff = 360 - directDiff;
  return Math.min(directDiff, indirectDiff);
}


const time1 = '12:00';
const time2 = '11:59';
const time3 = '3:01';
const time4 = '6:30';
const time5 = '10:15';

// console.log(getMinsHandLocation(time1) === 0);
// console.log(getMinsHandLocation(time2) === 354);
// console.log(getMinsHandLocation(time3) === 6);
// console.log(getMinsHandLocation(time4) === 180);
// console.log(getMinsHandLocation(time5) === 90);

// console.log(getHrsHandLocation(time1) === 0);
// console.log(getHrsHandLocation(time2) === 359.5);
// console.log(getHrsHandLocation(time3) === 90.5);
// console.log(getHrsHandLocation(time4) === 195);
// console.log(getHrsHandLocation(time5) === 307.5);

console.log(getShorterAngleBetweenHands(time1) === 0);
console.log(getShorterAngleBetweenHands(time2) === 5.5);
console.log(getShorterAngleBetweenHands(time3) === 84.5);
console.log(getShorterAngleBetweenHands(time4) === 15);
console.log(getShorterAngleBetweenHands(time5) === 142.5);
