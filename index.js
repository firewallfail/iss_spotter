// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip)
// })

// fetchCoordsByIP('38.80.107.155', (error, coords) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }
//   console.log(`Latitude: ${coords.latitude}\nLongitude: ${coords.longitude}`)
// });
//{ latitude: '49.27670', longitude: '-123.13000' }

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, times) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }
//   console.log(times);
// });

// index.js

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});
