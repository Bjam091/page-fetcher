const website = process.argv.slice(2)
const fs = require('fs');




const request = require('request');
request(website[0], (error, response, body) => {
//  console.log('error:', error); // Print the error if one occurred
//  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(website[1], body, (err, data) => {
    if (err) throw err;
    const { size } = fs.statSync(website[1]);
    console.log(`Downloaded and save ${size} to ${website[1]}!`);
  })

});
//process.argv
module.exports = "request";