function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

// function fiveHeadsSync() {
//   let headsCount = 0;
//   let attempts = 0;
//   while (headsCount < 5) {
//     attempts++;
//     let result = tossCoin();
//     console.log(`${result} was flipped`);
//     if (result === "heads") {
//       headsCount++;
//     } else {
//       headsCount = 0;
//     }
//   }
//   return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log(fiveHeadsSync());
// console.log("This is run after the fiveHeadsSync function completes");

function fiveHeads() {
  let headsCount = 0;
  let attempts = 0;
  let attemptsMax = 100;
  let flip = "";

  return new Promise((resolve, reject) => {
    while (attempts < attemptsMax) {
      flip = tossCoin();
      attempts++;
      console.log(`${attempts}: ${flip} was flipped`);
      if (flip === "heads") {
        headsCount++;
        if (headsCount === 5) {
          resolve(`It took ${attempts} attempts to get five "heads" in a row`);
          return true;
        }
      } else {
        headsCount = 0;
      }
    }
    reject(
      `The coin was flipped 100 times but we never got five "heads" in a row`
    );
    return false;
  });
}
fiveHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log("When does this run now?");
