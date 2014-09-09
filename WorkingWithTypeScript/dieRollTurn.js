/// <reference path="die.ts" />
var DiceRollTurn = (function () {
    function DiceRollTurn() {
        this.firstDie = new Die();
        this.secondDie = new Die();
        this.totalValue = this.firstDie.dieRoll + this.secondDie.dieRoll;

        this.displayHTML = document.createElement("div");

        var span = document.createElement("span");
        span.innerHTML = "Total roll" + this.totalValue;

        this.firstDie.dipslayDieInContainer(this.displayHTML);
        this.secondDie.dipslayDieInContainer(this.displayHTML);
        this.displayHTML.appendChild(span);
    }
    return DiceRollTurn;
})();
//# sourceMappingURL=dieRollTurn.js.map
