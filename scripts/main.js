AOS.init({
  once: true,
});

const splash = document.getElementById("helloSplash");
const words = document.querySelectorAll(".hello-word");

let current = 0;

const interval = setInterval(() => {
    words[current].classList.remove("active");

    current++;

    if (current < words.length) {
        words[current].classList.add("active");
    } else {
        clearInterval(interval);

        splash.classList.add("hide");

        setTimeout(() => {
            splash.remove();
        }, 800);
    }
}, 350);

const offcanvas = document.getElementById("offcanvasExample");
const toggleBtn = document.querySelector(".menu-toggle");

offcanvas.addEventListener("show.bs.offcanvas", () => {
  toggleBtn.classList.add("active");
});

offcanvas.addEventListener("hide.bs.offcanvas", () => {
  toggleBtn.classList.remove("active");
});
