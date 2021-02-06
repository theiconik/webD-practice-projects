
//Unspalsh API
const count = 10;
const apiKey = "P2HyhJrkkfrAIJuoIJJYMabQ7LWkg0rDglmIwXfHOnc";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=landscape`;

//Get photos from Unspalsh API

async function getPhotos(){
   try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
   } catch (error) {
      // Catch Error Here
   }
}

//On load
getPhotos();
