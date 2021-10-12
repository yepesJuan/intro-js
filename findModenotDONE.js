/// not done
function findRepeatAmount(age) {
  let bucket = age[0];
  let counter = 0;
  for (let i = 1; i < age.length; i++) {
    if (bucket === age[i]) {
      counter++;
    }
  }
  return counter;
}

const ages = [1, 2, 3, 4, 5, 5, 5, 5, 6];

console.log(findRepeatAmount(ages));
