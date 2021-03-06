﻿class Die {
    dieElement: HTMLImageElement;
    public dieRoll: number;

    constructor();
    constructor(value?: number) {
        this.dieElement = document.createElement("img");
        this.dieRoll = value ||
        Math.floor(Math.random() * 6 + 1);

        this.dieElement.setAttribute("src",
            this.getImgSrc());
    }

    private getImgSrc() {
        var imgSrc: string;
        switch (this.dieRoll) {
            case 1:
                return "/images/dice1.png";
            case 2:
                return "/images/dice2.png";
            case 3:
                return "/images/dice3.png";
            case 4:
                return "/images/dice4.png";
            case 5:
                return "/images/dice5.png";
            case 6:
                return "/images/dice6.png";
            default:
                return "";
        }
    }

    public displayDieInContainer(element: HTMLElement) {
        element.appendChild(this.dieElement);
    }
} 