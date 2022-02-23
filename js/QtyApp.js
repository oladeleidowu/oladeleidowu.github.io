// console.log(window);

// let val;
// val = document.querySelector("#pid");
//val = document.getElementById("pid");
//val = document.querySelector("#pid");
//val = document.getElementsByClassName("text-center");

// console.log(val.innerHTML=1);

let x = 0;

function plusButton(){
    const myP = document.querySelector("#pid");
    myP.innerHTML = x+=1;
}

function minusButton(){
    const myM = document.querySelector("#pid");
    myM.innerHTML = x-=1;
}

const btnPlus = document.querySelector("#btnplus");
btnPlus.addEventListener("click", function(){plusButton()});

const btnMinus = document.querySelector("#btnminus");
btnMinus.addEventListener("click", function(){minusButton()});

