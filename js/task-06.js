const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event, onInputBlurRemove) {
  if (event.currentTarget.value.length === +inputRef.dataset.length) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else if (event.currentTarget.value.length !== +inputRef.dataset.length) {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
