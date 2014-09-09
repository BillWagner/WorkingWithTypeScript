﻿/// <reference path="die.ts" />
/// <reference path="iroll.ts" />
var DiceRollTurn = (function () {
    function DiceRollTurn() {
        this.firstDie = new Die();
        this.secondDie = new Die();
        this.totalValue = this.firstDie.dieRoll + this.secondDie.dieRoll;

        this.displayHTML = document.createElement("div");

        var span = document.createElement("span");
        span.innerHTML = "Total roll" + this.totalValue;

        this.firstDie.displayDieInContainer(this.displayHTML);
        this.secondDie.displayDieInContainer(this.displayHTML);
        this.displayHTML.appendChild(span);
    }
    return DiceRollTurn;
})();
//# sourceMappingURL=dieRollTurn.js.map
