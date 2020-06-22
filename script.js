let gridContainer=document.getElementById("grid-container");
let gridItem=document.getElementsByClassName("grid-item");
let i;

for (i = 0; i < gridItem.length; i++) {
  gridItem[i].addEventListener("mouseenter", changeColor);
} 


function createGrid(){
let columns=prompt("Please enter the number of columns", "10");
let rows=prompt("Please enter the number of rows", "10");
let size="40px ";
gridContainer.style.gridTemplateColumns=size.repeat(columns);
gridContainer.style.gridTemplateRows=size.repeat(rows);
gridContainer.innerHTML="";
  
let items=columns*rows;
for (i = 0; i < items; i++){
const square = document.createElement('div');
square.classList.add("grid-item");
gridContainer.appendChild(square);
}
 
 for (i = 0; i < gridItem.length; i++) {
  gridItem[i].addEventListener("mouseenter", changeColor);
}   
  
}

function changeColor(){
let symbols="0123456789ABCDEF";
let color="#"
for(i=0;i<6;i++){
    color=color+symbols[Math.floor(Math.random()*16)];
  }
  this.style.backgroundColor=color;
}


  



document.getElementById("button").addEventListener("click", createGrid);

