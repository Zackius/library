const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "687575473dmshf93ce8692bb11cep1dec44jsn45613d6339c8",
    "X-RapidAPI-Host": "bookshelves.p.rapidapi.com",
  },
};

fetch("https://bookshelves.p.rapidapi.com/books", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const option = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "687575473dmshf93ce8692bb11cep1dec44jsn45613d6339c8",
    "X-RapidAPI-Host": "book4.p.rapidapi.com",
  },
};

fetch("https://book4.p.rapidapi.com/", option)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

let photo1 = document.getElementById("photo1");
let photo2 = document.getElementById("photo2");
let photo3 = document.getElementById("photo3");
let photo4 = document.getElementById("photo4");

const slides = [photo1, photo2, photo3, photo4]
 setInterval(() => {
  for (let i = 0; i < slideslength; i++) {
    const imgSlide = slides[i++];
    
  }
 },3000);