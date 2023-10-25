var toggleButton;
var landingPage;
var hamburgerMenu;

function declare(){
    toggleButton = document.querySelector(".toggleBtn");
    landingPage = document.querySelector(".landingPage");
    hamburgerMenu = document.querySelector(".hamburgerMenu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation(){
    // alert("Hello");

    // Clone landing page
    dark = !dark;
    // console.log(dark);
    let clone = landingPage.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    }else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    document.body.classList.add("stopScrolling");

    clone.addEventListener("animationend", () => {
        // console.log("test");
        document.body.classList.remove("stopScrolling");
        landingPage.remove();
        clone.classList.remove("copy");

        // reset vars
        declare();
        events();
    });
}

function events(){
    toggleButton.addEventListener("click", toggleAnimation);
    hamburgerMenu.addEventListener("click", () => {
        landingPage.classList.toggle("active");
    });
}

events();
