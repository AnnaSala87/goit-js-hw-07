const listaZKategoriami = document.querySelector("ul#categories")
const tablicaKategorii = listaZKategoriami.querySelectorAll("li.item");
console.log(tablicaKategorii.length)
//2.
for(let kategoriaElement of tablicaKategorii){
    console.log(kategoriaElement.querySelector("h2").textContent);
    console.log(kategoriaElement.querySelector("ul").querySelectorAll('li').length);
}