
const logoutBtn = document.getElementById("btnlogout");
const pTag = document.getElementById("successid");

logoutBtn.addEventListener("click", logout);

function logout(){
    localStorage.removeItem("user");
    window.location = "loginPage.html";
}

let userCookie = localStorage.getItem("user");
if(userCookie == null){
    window.location = "login.html";
}
else {
    pTag.innerHTML = `Welcome ${userCookie}`;
}