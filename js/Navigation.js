export class Navigation {
    btnNav = document.querySelector(".nav__btn");
    navigator = document.querySelector(".nav__container");
    // testerBtn = document.querySelector(".tester");

    menuHasSub = document.querySelectorAll(".nav__item--has-sub-menu");
    mainMenu = document.querySelector(".nav__menu--main");
    submenu = document.querySelectorAll(".nav__menu--sub");

    backToMainMenu = document.querySelectorAll("[data-action=backToMainMenu]");
    constructor() {
        this._init();

        console.log(this.backToMainMenu);
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
