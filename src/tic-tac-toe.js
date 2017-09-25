'use strict';

class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x';
        this.arr = [Array.from({length:3},_=>null),Array.from({length:3},_=>null),Array.from({length:3},_=>null)];
        this.count = 9;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.arr[rowIndex][columnIndex]) {
            this.arr[rowIndex][columnIndex] = this.currentPlayerSymbol;
            if (this.currentPlayerSymbol == 'x') {
                this.currentPlayerSymbol = 'o'
            }else {
                this.currentPlayerSymbol = 'x';
            }
            this.count--;
        }
        let i;
        for (i = 0; i < 3; i++) {
            if (this.arr[i][1] == this.arr[i][2] &&
                this.arr[i][0] == this.arr[i][1] &&
                this.arr[i][0] != undefined) {
                this.winner = this.arr[i][1];
            }
            else if (this.arr[1][i] == this.arr[2][i] &&
                this.arr[0][i] == this.arr[1][i] &&
                this.arr[0][i] != undefined) {
                this.winner = this.arr[1][i];
            }
            else if (this.arr[0][0] == this.arr[1][1] &&
                    this.arr[1][1] == this.arr[2][2] &&
                    this.arr[1][1] !== undefined)
            {
                this.winner = this.arr[1][1];
            }
            else if (this.arr[0][2] == this.arr[1][1] &&
                this.arr[1][1] == this.arr[2][0] &&
                this.arr[1][1] !== undefined)
            {
                this.winner = this.arr[1][1];
            }
        }
        return this.currentPlayerSymbol;
    }

    isFinished() {
        return this.isDraw() || !!this.getWinner()
    }

    getWinner() {
        return this.winner
    }

    noMoreTurns() {
        return !this.count
    }

    isDraw() {
        return !this.getWinner() && !this.count

    }

    getFieldValue(rowIndex, colIndex) {
            return this.arr[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;