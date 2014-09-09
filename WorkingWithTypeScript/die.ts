class Die {
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



    
} 