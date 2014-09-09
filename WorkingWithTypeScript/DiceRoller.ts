/// <reference path="iroll.ts" />
class DiceRoller {
    element: HTMLElement;
    allRolls: Array<IRoll>;

    constructor(element: HTMLElement) {
        this.element = element;
        this.allRolls = new Array<IRoll>();
    }
} 