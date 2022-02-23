const alertBox = document.getElementById("alertid");
const userTxt = document.getElementById("userid");
const passTxt = document.getElementById("passid");
const loginBtn = document.getElementById("btnlogid");
const smallComp = document.getElementById("smallid");
const smallComp2 = document.getElementById("smallid2");

loginBtn.addEventListener("click", login);
userTxt.addEventListener("change", check)

function check() {
   if (userTxt.value.length < 5) {
      alertBox.classList.replace("d-block", "d-none");
      userTxt.classList.add("is-invalid");
      smallComp.classList.add("invalid-feedback");
      smallComp.innerHTML = `Username should be 5 character and above`;

      smallComp.classList.remove("d-none");
      smallComp.classList.add("d-block");
   } 
   else 
   {
      alertBox.classList.remove("d-block");
      alertBox.classList.add("d-none");
      userTxt.classList.remove("is-invalid");
      smallComp.classList.remove("invalid-feedback");
      userTxt.classList.add("is-valid");
      smallComp.classList.add("d-none");
      smallComp.classList.remove("d-block");
   }
}

function login(){
   if (userTxt.value === "" || passTxt.value === ""){
      
      alertBox.innerHTML = `Please enter all fields`;
      alertBox.classList.remove("alert-success");
      alertBox.classList.add("alert-danger");
      alertBox.classList.replace("d-none", "d-block");       
   }
   else  if (userTxt.value.length < 5) {
      alertBox.classList.replace("d-block", "d-none");

      userTxt.classList.add("is-invalid");
      smallComp.classList.add("invalid-feedback");
      smallComp.innerHTML = `Username should be 5 character and above`;

      smallComp.classList.remove("d-none");
      smallComp.classList.add("d-block");
   }
   else {
      if (passTxt.value == userTxt.value.substring(0, 5))
      {
         
         localStorage.setItem("user", userTxt.value);
         window.location = "success.html"
          }
         else
         {
            alertBox.innerHTML = `Invalid username or password`;
            alertBox.classList.replace("d-none", "d-block");
            alertBox.classList.remove("alert-success");
            alertBox.classList.add("alert-danger");
         }
      }
}
