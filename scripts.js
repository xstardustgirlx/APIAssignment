/*
User can select from a drop-down menu a top, bottom, socks, shoes, headwear, and bag to make a complete outfit from the Animal Crossing New Horizons inventory
*/

//fetch(url, { headers: { 'X-API-KEY': apiKey } })

// API KEY: 0d81853e-53b2-4ffa-a430-c049b6d1c02f
//end of notes at top, let the fun begin

//OMG THIS WORKS!!! 
let baseURL = "https://api.nookipedia.com/nh/clothing?category=headware";



//define what each button brings back
let buttonElement = document.getElementById("clothing-tops");






fetch(baseURL, { headers: { "X-API-KEY": "0d81853e-53b2-4ffa-a430-c049b6d1c02f" } })

.then(response => response.json())
 .then(jsonData => console.log(jsonData));

