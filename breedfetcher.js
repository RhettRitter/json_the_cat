const args = process.argv.slice(2);
const request = require("request");
const breedId = args[0];


if (!breedId) {
  console.log('enter brred name:)');
}
const site = `https://api.thecatapi.com/v1/breeds/search?q=${breedId}`;
//const url = args[1]
request(site, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(`'Downloaded and saved ${body.length} bytes to ./index.html'`);
  console.log('Breed not found:(', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', data); // Print the HTML for the Google homepage.
    
});


