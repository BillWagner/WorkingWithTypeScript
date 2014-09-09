/// <reference path="die.ts" />
/// <reference path="iroll.ts" />

class DiceRollTurn  {
    firstDie = new Die();
    secondDie = new Die();

    public totalValue: number;
    public displayHTML: HTMLDivElement;

    constructor() {
        this.totalValue = this.firstDie.dieRoll + this.secondDie.dieRoll;

        this.displayHTML = document.createElement("div");

        var span = document.createElement("span");
        span.innerHTML = "Total roll " + this.totalValue;

        this.firstDie.displayDieInContainer(this.displayHTML);
        this.secondDie.displayDieInContainer(this.displayHTML);
        this.displayHTML.appendChild(span);
    }

} 