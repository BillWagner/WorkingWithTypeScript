﻿/// <reference path="iroll.ts" />
class DiceRoller {
    element: HTMLElement;
    allRolls: Array<IRoll>;

    constructor(element: HTMLElement) {
        this.element = element;
        this.allRolls = new Array<IRoll>();
    }

    private onTick() {
        var newRoll = new DiceRollTurn();
        this.allRolls.push(newRoll);

        while (this.allRolls.length > 15) {
            this.allRolls.splice(0, 1);
        }

        this.element.appendChild(newRoll.displayHTML);

        while (this.element.childElementCount > 15) {
            this.element.removeChild(this.element.childNodes[0]);
        }
    }
} 