const inputRef = document.querySelector("#font-size-control");
inputRef.addEventListener("input", onInputChange);
const spanRef = document.querySelector("#text");

function onInputChange(event, onSpanTextChange) {
  if (event.currentTarget.value) {
    spanRef.value + "px";
  }
}
