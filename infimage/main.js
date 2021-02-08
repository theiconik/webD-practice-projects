//Identifiers

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

//Unspalsh API

const count = 20;
const apiKey = "P2HyhJrkkfrAIJuoIJJYMabQ7LWkg0rDglmIwXfHOnc";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=landscape`;

//Check if all images are loaded

function imageLoaded() {
   imagesLoaded++;
   console.log(imagesLoaded);
   if(imagesLoaded === totalImages) {
      ready = true;
      console.log('ready =', ready);
      loader.hidden = true; 
   }
}

// Helper Function to Set Attributes on DOM Elements

function setAttributes (element , attributes) {
   for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
   }
}

// Create Elements for Links & Photos, Add to DOM

function displayPhotos() {
   
   imagesLoaded = 0;
   totalImages = photosArray.length;
   console.log('total images', totalImages);
   photosArray.forEach((photo) => {
      // Create <a> to link to Unsplash
      const item = document.createElement('a');
      // item.setAttribute('href', photo.links.html);
      // item.setAttribute('target', '_blank');

      setAttributes (item , {
         href : photo.links.html,
         target : '_blank',
      });

      // Create <img> for photo
      const img = document.createElement('img');
      // img.setAttribute('src', photo.urls.regular);
      // img.setAttribute('alt', photo.alt_description);
      // img.setAttribute('title', photo.alt_description);

      setAttributes (img , {
         src : photo.urls.regular,
         alt: photo.alt_description,
         title : photo.alt_description,
      });

      //Event Listener, check when each is finished loading
      img.addEventListener('load', imageLoaded);

      //Put <img> inside <a> then put both inside imageContainer Element
      item.appendChild(img);
      imageContainer.appendChild(img);
   });
}

//Get photos from Unsplash API

async function getPhotos(){
   try {
      const response = await fetch(apiUrl);
      photosArray = await response.json();
      //console.log(photosArray);
      displayPhotos();
   } catch (error) {
      // Catch Error Here
   }
}

//Check to see if scrolling near bottom of page, Load More Photos

window.addEventListener('scroll', () => {
   if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
      console.log('load more');
      ready = false;
      getPhotos();
   }
});

//On load
getPhotos();
