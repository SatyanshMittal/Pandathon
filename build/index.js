
const menu = document.querySelector(".menu");
const button = document.querySelector("#button").addEventListener("click", function () {

    // menu.style.bottom = "0vh";

    if (menu.style.bottom === "48vh") {

        menu.style.bottom = "0vh";
        
    }

    else{
        menu.style.bottom = "48vh";
    }
    
})