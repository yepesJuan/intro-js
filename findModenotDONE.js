/// not done
function findRepeatAmount(agez) {
  let bucket = agez[0];
  let counter = 0;
  for (let i = 1; i < agez.length; i++) {
    if (bucket === agez[i]) {
      counter++;
    }
  }
  return counter;
}

const ages = [1, 2, 3, 4, 5, 5, 5, 5, 6];

console.log(findRepeatAmount(ages));
