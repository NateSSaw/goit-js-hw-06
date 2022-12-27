const range = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

range.addEventListener(
  "input",
  () => (spanRef.style.fontSize = range.value + "px")
);
