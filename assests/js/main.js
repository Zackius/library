let initialImage = 0;
function imageSlides() {
  setTimeout(imageSlides, 5000);
  let i;
  const images = document.querySelectorAll("#photos ");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  initialImage++;
  if (initialImage > images.length) {
    initialImage = 1;
  }
  images[initialImage - 1].style.display = "block";
}
imageSlides();

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "687575473dmshf93ce8692bb11cep1dec44jsn45613d6339c8",
//     "X-RapidAPI-Host": "bookshelves.p.rapidapi.com",
//   },
// };

// fetch("https://bookshelves.p.rapidapi.com/books", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// const option = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "687575473dmshf93ce8692bb11cep1dec44jsn45613d6339c8",
//     "X-RapidAPI-Host": "book4.p.rapidapi.com",
//   },
// };

// fetch("https://book4.p.rapidapi.com/", option)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// const optio = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "687575473dmshf93ce8692bb11cep1dec44jsn45613d6339c8",
//     "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
//   },
// };

// fetch("https://quotes15.p.rapidapi.com/quotes/random/", optio)
//   .then((response) => response.json())
//   .then((response) => renderQuotes(response))
//   .catch((err) => console.error(err));
// function renderQuotes(quote) {
//   let quotes = document.getElementById("qoutes");
//   let p = document.createElement("p");
//   p.innerHTML.quote.name;
//   quotes.appendChild(p);
// }

// let photo1 = document.getElementById("photo1");
// let photo2 = document.getElementById("photo2");
// let photo3 = document.getElementById("photo3");
// let photo4 = document.getElementById("photo4");

// const slides = [photo1, photo2, photo3, photo4];
// setInterval(() => {
//   for (let i = 0; i < slideslength; i++) {
//     const imgSlide = slides[i++];
//   }
// }, 3000);

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "687575473dmshf93ce8692bb11cep1dec44jsn45613d6339c8",
//     "X-RapidAPI-Host":
//       "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// function renderQuotes(quote) {
//   quote.forEach((quot) => {
//     let quotes = document.getElementById("qoutes");
//     let p = document.createElement("p");

//     quotes.textContent = quot.text;
//     p.appendChild(quotes);
//   });
// }
// renderQuotes();
