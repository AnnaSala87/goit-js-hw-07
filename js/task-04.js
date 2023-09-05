function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let divBoxesTag = document.querySelector("div#boxes")
  let currentHeight = 30;
  for(let counter = 0; counter < amount; counter ++){
    let divElement = document.createElement("div");
    divElement.style.backgroundColor = getRandomHexColor();
    //divElement.style.display="list-item"
    divElement.style.width=`30px`;
    divElement.style.height=`${currentHeight}px`
    divBoxesTag.insertAdjacentHTML("beforeEnd",divElement.outerHTML);
    currentHeight+=10;
  }
}

function destroyBoxes(){
  document.querySelector("div#boxes").innerHTML='';
}

document.querySelector("div#controls > button[data-create]").addEventListener("click", ()=>{
  let divBoxesAmount = document.querySelector("div#controls > input").value;
  createBoxes(divBoxesAmount);
});
document.querySelector("div#controls > button[data-destroy]").addEventListener("click", ()=>{
  destroyBoxes();
});