const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
    date: "2023/02/01",
  },
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
    date: "2023/02/01",
  },
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
    date: "2023/02/01",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    date: "2023/02/10",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
    date: "2023/02/05",
  },
];

const listEl = document.querySelector(".gallery");
const img = images
  .map(
    (image) =>
      `<li class = "date" data-date="${image.date}"><img src=${image.url} alt='${image.alt}'width = 200 height = 150></li>`
  )
  .join("");

listEl.insertAdjacentHTML("afterbegin", img);

const date = "2023/02/01";
const cards = document.querySelectorAll(".date");
const card = document.querySelector(".date");
console.log(cards);
let list = [];
cards.forEach((item) => {
  if (date !== card.dataset.date) {
    card.classList.add(".visually-hidden");
  }
});
