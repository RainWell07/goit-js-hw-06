const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData.entries());

  if (!formObject.email || !formObject.password) {
    alert("Помилка, заповніть всі поля");
  }
  else {
    console.log(formObject);
    form.reset();
  }
});
