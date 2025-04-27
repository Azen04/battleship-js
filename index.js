import { Board } from "./scripts/battleShip.js";
import { question, questionInt } from "readline-sync";

if (question('Welcome to Battleship. \n Would you like to play?') == 'yes') {

    const gameBoard = new Board(questionInt('choose your board size: '))
    let playerInputCount = 0
    let rowToTarget = null
    let columnToTarget = null

    gameBoard.buildBoard()
    gameBoard.buildShips()

    while (gameBoard.size ** 2 > playerInputCount) {
        console.table(gameBoard.zones)

        rowToTarget = questionInt('row: ')
        columnToTarget = questionInt('column: ')

        while (gameBoard.validator(rowToTarget, columnToTarget) == false) {
            console.log(`numbers should be less than ${gameBoard.size} and greater than or equal to 0`);
            rowToTarget = questionInt('row: ')
            columnToTarget = questionInt('column: ')
        }

        gameBoard.hitZone(rowToTarget, columnToTarget)
        console.clear()

        if (gameBoard.remainingShipZones == 0) {
            console.log(`========
__   _______ _   _   _    _ _____ _   _
\ \ / /  _  | | | | | |  | |_   _| \ | |
 \ V /| | | | | | | | |  | | | | |  \| |
  \ / | | | | | | | | |/\| | | | | . ' |
  | | \ \_/ / |_| | \  /\  /_| |_| |\  |
  \_/  \___/ \___/   \/  \/ \___/\_| \_/
========`);
            break
        }

        playerInputCount++
    }
} else {
    console.log('okay have a goad day');
}
