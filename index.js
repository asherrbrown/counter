// Asher Brown 08/07/2022 

let count = 0;
let counter = document.getElementById("counter");

function increment(){
  count += 1;
  counter.textContent = count;
  
}

function reset(){
  count = 0;
  counter.textContent = count;

}

let countEl = document.getElementById("countEl");


function save(){
  countEl.textContent += count + " - ";
  count = 0;
  counter.textContent = count;
}


function clearCode(){
  countEl.textContent = "Entries: " ;
}