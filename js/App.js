export class App {
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
