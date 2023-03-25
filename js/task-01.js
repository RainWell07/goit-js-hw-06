const list = document.querySelector("#categories")
const items = list.querySelectorAll(".item")

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
    const category = item.querySelector("h2").textContent;
    const elements = item.querySelectorAll("li");

    console.log(`Category: ${category}`)
    console.log(`Elements: ${elements.length}`)
});







