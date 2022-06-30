


const btnEnter = document.querySelector("#btnid");
btnEnter.addEventListener("click", function(){
    
    const alertBox = document.querySelector("#alertid");
    const textField = document.querySelector("#txtid");
    let txtValue = textField.value;  // value is to retreive data
    
    if (txtValue ===""){
        alertBox.classList.remove("d-none");
        alertBox.classList.add("alert-danger");
        alertBox.innerHTML = `Please enter a number`;
    } 
    else {
        alertBox.classList.remove("d-none");
        if (txtValue %2==0){

            alertBox.classList.remove("alert-danger");
            alertBox.classList.add("alert-success");
            alertBox.innerHTML = `${txtValue} is an Even Number`;
        }else {
            alertBox.classList.remove("alert-success");
            alertBox.classList.add("alert-danger");
            alertBox.innerHTML = `${txtValue} is an Odd Number`;
            
        }
    }
    
    // alert(txtValue);
});
