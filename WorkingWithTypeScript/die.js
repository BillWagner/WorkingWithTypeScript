var Die = (function () {
    function Die(value) {
        this.dieElement = document.createElement("img");
        this.dieRoll = value || Math.floor(Math.random() * 6 + 1);

        this.dieElement.setAttribute("src", this.getImgSrc());
    }
    return Die;
})();
//# sourceMappingURL=die.js.map
