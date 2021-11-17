// import { App } from "./App.js";
// import { Carausel } from "./Carausel.js";
// import { Navigation } from "./Navigation.js";

class App {
    tes = document.querySelectorAll(".nav__menu");
    constructor() {
        this._init();
    }

    _init() {
        window.addEventListener("load", () => {
            document.querySelector("body").classList.remove("no-transition");

            setInterval(() => {
                // this.carauselNavNext.click();
            }, 5000);
        });
    }
}
class Carausel {
    carauselNavPrev = document.querySelector(".carausel__nav--prev");
    carauselNavNext = document.querySelector(".carausel__nav--next");
    carauselItem = document.querySelectorAll(".carausel__item");
    carauselBulletContainer = document.querySelector(".carausel__bullet-container");
    carauselPosition = 0;

    carauselBulletHTML = `<div class="carausel__bullet"></div>`;

    constructor() {
        this._setCarauselLenght();
        this._init();
    }

    _init() {
        window.addEventListener("load", () => {
            document.querySelector("body").classList.remove("no-transition");

            setInterval(() => {
                // this.carauselNavNext.click();
            }, 5000);
        });

        this._arrangeCarausel();

        this.carauselNavNext.addEventListener("click", () => {
            this.carauselPosition++;

            if (this.carauselPosition == this.carauselLenght) this.carauselPosition = 0;
            this._slideTheCarausel();
        });

        this.carauselNavPrev.addEventListener("click", () => {
            this.carauselPosition--;

            if (this.carauselPosition == -1) this.carauselPosition = this.carauselLenght - 1;

            this._slideTheCarausel();
        });
    }

    _slideTheCarausel() {
        this.carauselItem.forEach((element, index) => {
            element.style.transform = `translateX(${index * 100 - this.carauselPosition * 100}%)`;
        });

        this.carauselBullet.forEach((element) => {
            element.classList.remove("carausel__bullet--active");
        });

        this.carauselBullet[this.carauselPosition].classList.add("carausel__bullet--active");
    }

    _arrangeCarausel() {
        this.carauselItem.forEach((element, index) => {
            element.style.transform = `translateX(${index * 100}%)`;
            this.carauselBulletContainer.insertAdjacentHTML("beforeend", this.carauselBulletHTML);
        });
        this.carauselBullet = document.querySelectorAll(".carausel__bullet");
        this.carauselBullet[0].classList.add("carausel__bullet--active");
    }

    _setCarauselLenght() {
        this.carauselLenght = this.carauselItem.length;
    }
}
class Navigation {
    btnNav = document.querySelector(".nav__btn");
    navigator = document.querySelector(".nav__container");
    // testerBtn = document.querySelector(".tester");

    menuHasSub = document.querySelectorAll(".nav__item--has-sub-menu");
    mainMenu = document.querySelector(".nav__menu--main");
    submenu = document.querySelectorAll(".nav__menu--sub");

    backToMainMenu = document.querySelectorAll("[data-action=backToMainMenu]");
    constructor() {
        this._init();
    }

    _init() {
        // this.testerBtn.addEventListener("click", () => {
        //     this.mainMenu.classList.remove("nav__menu--hide");
        // });

        this.btnNav.addEventListener("click", () => {
            this.navigator.classList.toggle("nav__container--show");
        });

        this.navigator.addEventListener("click", (e) => {
            // Kalo yang di click bukan menu yang punya sub, maka keluar
            if (!e.target.closest(".nav__item--has-sub-menu")) return;
            const target = e.target.closest(".nav__item--has-sub-menu");

            this.submenu.forEach((element) => {
                // Element = subMenu
                if (target.id == element.dataset.sub) {
                    this.mainMenu.classList.toggle("nav__menu--hide");
                }
            });
        });

        this.navigator.addEventListener("click", (e) => {
            // Kalo sub menu arrow di click
            if (!e.target.closest("[data-action=backToMainMenu]")) return;

            this.mainMenu.classList.remove("nav__menu--hide");
            console.log("hi");
        });

        window.addEventListener("resize", () => {
            this.navigator.classList.remove("nav__container--show");
            // this.mainMenu.classList.remove("nav__menu--hide");
        });
    }
}

const app = new App();
const carausel = new Carausel();
const navigation = new Navigation();
