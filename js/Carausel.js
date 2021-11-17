export class Carausel {
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
