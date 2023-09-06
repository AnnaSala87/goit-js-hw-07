const listOfCategories = document.querySelector("ul#categories")
const tableOfCategories = listOfCategories.querySelectorAll("li.item");
console.log(`Number of categories: ${tableOfCategories.length}`)
//2.
for(let categoryElement of tableOfCategories){
    console.log(`Category: ${categoryElement.querySelector("h2").textContent}`);
    console.log(`Elements: ${categoryElement.querySelector("ul").querySelectorAll('li').length}`);
}