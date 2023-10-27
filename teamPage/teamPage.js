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

/* the first */

var swiper = new Swiper('.mySwiper1', {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

    },
});

/* the second */

var swiper = new Swiper('.mySwiper2', {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

    },
});

