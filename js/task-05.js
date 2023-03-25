const NameInput = document.querySelector("#name-input");
const NameOutput = document.querySelector("#name-output");

NameInput.addEventListener("input", () => {
  if (NameInput.value.trim() === "") {
      NameOutput.textContent = "Anonymous";
  } else {
      NameOutput.textContent = NameInput.value.trim();
  }
});
