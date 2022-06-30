
const button = document.querySelector("#btnid");

button.addEventListener("click", getData);

function getData(){
    const jaykay = new XMLHttpRequest();
    
    jaykay.open("GET","data/student.json", true);
    
    jaykay.onload = function (){
        if (jaykay.status == 200){
            //console.log(jaykay.response);
            const res = JSON.parse(jaykay.response); // coversion to an object
            console.log(res);
        }
    }
    jaykay.send();
    
    //console.log(jaykay);
}