
    const myLength = document.querySelector("#btncalid");

        myLength.addEventListener("click", function () {
            let inlength = document.querySelector("#lenghtid");
            let inwidth = document.querySelector("#widthid");
            const meter = document.querySelector("#outputMeter");
            const feet = document.querySelector("#outputFeet");
            const inch = document.querySelector("#outputInches");
            let length = inlength.value;
            let width =  inwidth.value;        
            d
            meter.innerHTML = length * width;
            feet.innerHTML = length * width * 10.76391;
            inch.innerHTML = length * width * 1550;
        });       