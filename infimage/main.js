//Identifiers

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

//Unspalsh API

const count = 10;
const apiKey = "P2HyhJrkkfrAIJuoIJJYMabQ7LWkg0rDglmIwXfHOnc";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=landscape`;

// Create Elements for Links & Photos, Add to DOM

function displayPhotos() {
   photosArray.forEach((photo) => {
      // Create <a> to link to Unsplash
      const item = document.createElement('a');
      item.setAttribute('href', photo.links.html);
      item.setAttribute('target', '_blank');
      // Create <img> for photo
      const img = document.createElement('img');
      img.setAttribute('src', photo.urls.regular);
      img.setAttribute('alt', photo.alt_description);
      img.setAttribute('title', photo.alt_description);
      //Put <img> inside <a> then put both inside imageContainer Element
      item.appendChild(img);
      imageContainer.appendChild(img);
   });
}

//Get photos from Unspalsh API

async function getPhotos(){
   try {
      const response = await fetch(apiUrl);
      photosArray = await response.json();
      console.log(photosArray);
      displayPhotos();
   } catch (error) {
      // Catch Error Here
   }
}

//On load
getPhotos();
