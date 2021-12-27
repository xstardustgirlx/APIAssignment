/*
This is a test document
*/

//fetch(url, { headers: { 'X-API-KEY': apiKey } })

// API KEY: 0d81853e-53b2-4ffa-a430-c049b6d1c02f
//end of notes at top, let the fun begin

//for a single category:
//let baseURL = "https://api.nookipedia.com/nh/clothing?category=headwear";

const baseURL = "https://api.nookipedia.com/villagers?species=Dog";

let formElement = document.getElementById("search-form");
let listElement = document.getElementById("dog-name");

function fetchDogs() {

fetch(baseURL, { headers: { "X-API-KEY": "0d81853e-53b2-4ffa-a430-c049b6d1c02f" } })

.then(response => {
    return response.json();
})
.then(jsonData => {
    console.log(jsonData);

    for(let dog of jsonData) {
        displayDog(dog);
    }
    
})

}

fetchDogs();


// stuff to go in boxes comes from (dogData)
function displayDog(dogData) {

    //boxes to pack all the items in
    let dogHouse = document.createElement("ul");
    let dogName = document.createElement("h2");
    let dogImage = document.createElement("img");
    let dogQuote = document.createElement("p");
    

    //stuff that goes in the boxes above
    dogName.innerText = dogData.name;
    dogImage.src = dogData.image_url;
    dogQuote.innerText = dogData.quote;
    listElement = dogData.name;

    //labels for the boxes
    dogHouse.classList.add("dog-house");
    dogName.classList.add("dog-name");
    dogImage.classList.add("dog-image");
    dogQuote.classList.add("dog-quote");

    //appendChild seals the boxes and puts them in the bigger box, Doghouse is the big box, the stuff after appendChild are the smaller boxes
        dogHouse.appendChild(dogName);
        dogHouse.appendChild(dogImage);
        dogHouse.appendChild (dogQuote);

    formElement.appendChild(dogHouse); 

}








