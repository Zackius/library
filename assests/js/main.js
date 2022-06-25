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

Promise.all([
  fetch("http://localhost:3000/quotes"),
  fetch("http://localhost:3000/books"),
])
  .then((resp) => {
    return Promise.all(resp.map((resp) => resp.json()));
  })
  .then(([quotes, books]) => {
    renderQuotes(quotes);
    renderBooks(books);
  });

function renderQuotes(quote) {
  const num = Math.floor(Math.random() * quote.length);
  const item = quote[num];

  const todayQuote = document.getElementById("quote");
  const h3 = document.createElement("h3");
  h3.textContent = item.text;
  todayQuote.appendChild(h3);
  h3.style.padding = "50px";

  const h4 = document.createElement("h4");
  h4.style.color = "brown";

  h4.textContent = item.author;
  todayQuote.appendChild(h4);
}
renderQuotes();

function renderBooks(vitabu) {
  vitabu.forEach((book) => {
    const bookImage = document.getElementById("img");

    const image = document.createElement("img");
    image.src = book.image_url;
    image.style.width = "300px";
    image.style.height = "200px";
    bookImage.appendChild(image);
    const h4 = document.getElementById("bokName");
    h4.innerText = book.bookName;
    const h5 = document.getElementById("author");
    h5.innerText = book.author;
    const h6 = document.getElementById("realese");
    h6.innerText = book.dateOfPublish;
  });
}
renderBooks();
