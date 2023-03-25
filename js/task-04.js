let counterValue = 0;

const value = document.querySelector("#value");
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
// ВІДНІМАННЯ
decrement.addEventListener("click", () => {
    counterValue --;
    value.textContent = counterValue;
});
// ДОДАВАННЯ
increment.addEventListener("click", () => {
    counterValue++;
    value.textContent = counterValue;
});



















