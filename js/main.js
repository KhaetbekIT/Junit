const navIcon = document.querySelector(".nav-icon");
const navIconItem = document.querySelector(".nav-icon__item");
const Nav = document.querySelector(".nav");
const navList = document.querySelectorAll(".nav__list a");
const form = document.querySelector(".form");
const headerSearch = document.querySelector("#header-search");


navIcon.addEventListener("click", () => {
    navIconItem.classList.toggle("active");
    Nav.classList.toggle("active");
    navIcon.classList.toggle("active");
});

navList.forEach((item) => {
    item.addEventListener("click", () => {
        navIconItem.classList.remove("active");
        Nav.classList.remove("active");
        navIcon.classList.remove("active");
    });
});

headerSearch.addEventListener("click", (e) => {
    if (form.classList.contains("active")) {

    } else {
        e.preventDefault();
        form.classList.toggle("active");
    }
});
$(document).ready(function() {
    const owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        loop: true
    });
    const sliderPrev = $(".slider__arrow--left");
    const sliderNext = $(".slider__arrow--right");
    sliderPrev.on("click", () => {
        owl.trigger("prev.owl.carousel");
        // sliderPrev.classList.add("active");
        // sliderNext.classList.remove("active");
    });
    sliderNext.on("click", () => {
        owl.trigger("next.owl.carousel");

    });
});