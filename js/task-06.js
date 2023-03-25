const validation = document.getElementById("validation-input");

validation.addEventListener("blur", () => {
  const futureLength = validation.getAttribute("data-length");
  const actualLength = validation.value.length;

  if (actualLength === parseInt(futureLength)) {
    validation.classList.add("valid");
    validation.classList.remove("invalid");
  } else {
    validation.classList.add("invalid");
    validation.classList.remove("valid");
  }
});
