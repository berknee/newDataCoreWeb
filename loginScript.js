const inputs = document.querySelectorAll(".inputField");
const toggleButton = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullet span");
const images = document.querySelectorAll(".image");

inputs.forEach(inp => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    } );
    inp.addEventListener("blur", () => {
        if(inp.value != "") return;
        inp.classList.remove("active");
    });
});

toggleButton.forEach( (btn) => {
    btn.addEventListener("click", () => {
        main.classList.toggle("signUpMode");
    });
});

function moveSlider(){
    let index = this.dataset.value;
    // console.log(index);

    let currentImage = document.querySelector(`.img${index}`);
    // console.log(currentImage);

    images.forEach((img) => img.classList.remove("show"));
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".textGroup");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    bullets.forEach((bull) => bull.classList.remove("active"));
    this.classList.add("active");
}

bullets.forEach((bullet) => {
    bullet.addEventListener("click", moveSlider);
});