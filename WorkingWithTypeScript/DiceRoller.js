/// <reference path="dierollturn.ts" />
/// <reference path="iroll.ts" />
var DiceRoller = (function () {
    function DiceRoller(element) {
        this.element = element;
        this.allRolls = new Array();
    }
    DiceRoller.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () {
            return _this.onTick();
        }, 1000);
    };

    DiceRoller.prototype.onTick = function () {
        var newRoll = new DiceRollTurn();
        this.allRolls.push(newRoll);

        while (this.allRolls.length > 15) {
            this.allRolls.splice(0, 1);
        }

        this.element.appendChild(newRoll.displayHTML);

        while (this.element.childElementCount > 15) {
            this.element.removeChild(this.element.childNodes[0]);
        }
    };
    return DiceRoller;
})();
//# sourceMappingURL=DiceRoller.js.map
