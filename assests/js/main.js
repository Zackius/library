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

fetch("http://localhost:3000/quotes")
  .then((resp) => resp.json())
  .then((data) => {
    return renderQuotes(data);
  });

function renderQuotes(quote) {
  const num = Math.floor(Math.random() * quote.length);
  const item = quote[num];

  const todayQuote = document.getElementById("quote");
  const h2 = document.createElement("h2");
  h2.textContent = item.text;
  todayQuote.appendChild(h2);

  const h4 = document.createElement("h4");
  h4.style.color = "brown";

  h4.textContent = item.author;
  todayQuote.appendChild(h4);
}
renderQuotes();
