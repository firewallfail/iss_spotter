const { nextISSTimesForMyLocation, printPassTimes } = require('./iss_promised');


nextISSTimesForMyLocation().then((passTimes) => {
  printPassTimes(passTimes);
  // for (let time of passTimes) {
  //   let readableTime = new Date(time.risetime * 1000);
  //   let duration = time.duration;
  //   console.log(`Next pass at ${readableTime} for ${duration} seconds!`);
  // }
}).catch((error) => {
  console.log("It didn't work:", error.message);
})
// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => {
//     let passTimes = JSON.parse(body).response
//     for (let time of passTimes) {
//       let readableTime = new Date(time.risetime * 1000);
//       let duration = time.duration;
//       console.log(`Next pass at ${readableTime} for ${duration} seconds!`);
//     }
//   })
