
const button = document.querySelector("#btnid");

button.addEventListener("click", getDataRemoteServer);

function getDataRemoteServer() {
    const jaykay = new XMLHttpRequest();

    jaykay.open("GET", "https://jsonplaceholder.typicode.com/users/", true);

    let listValues = "";

    jaykay.onload = function () {
        if (jaykay.status == 200) {
            //console.log(jaykay.response);
            const res = JSON.parse(jaykay.response); // coversion to an object

            res.forEach(function (data) {
                listValues += `<li class = "list-group-item"> ID : ${data.id} NAME : ${data.name} Telephone  ${data.phone}</li>`
            });
            //console.log(res);
        } else {
            listValues += `<li class = "list-group-item"> Something went wrong </li>`
        }
        document.querySelector(".list-group").innerHTML = listValues;
    }

    jaykay.send();
}