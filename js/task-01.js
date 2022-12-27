const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach((item) => {
  const titleEl = item.firstElementChild.textContent;
  console.log("Category:", titleEl);
  const numberEl = item.lastElementChild.children.length;
  console.log("Elements:", numberEl);
});
