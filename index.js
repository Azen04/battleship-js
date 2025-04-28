import { Board } from "./scripts/battleShip.js";
import { keyInYN, question, questionInt } from "readline-sync";

if (keyInYN('Welcome to Battleship. \n Would you like to play?')) {

    const gameBoard = new Board(questionInt('choose your board size(min:4, max:6): '))

    if (gameBoard.size > 6 || gameBoard.size < 4) {
        let pass = false

        while (pass == false) {
            gameBoard.size = questionInt('size needs to be a number from 4-6 (inclusive), try again: ')

            switch (gameBoard.size) {
                case 4: pass = true; break;
                case 5: pass = true; break;
                case 6: pass = true; break;
            
                default:
                    break;
            }
        }
    }

    let playerInputCount = 0
    let targetZone = null

    gameBoard.buildBoard()
    gameBoard.buildShips()

    while (gameBoard.size ** 2 > playerInputCount) {
        console.table(gameBoard.zones)

        targetZone = question('zone: ')

        while (gameBoard.validator(targetZone) == false) {
            console.log(`value should be a letter and a number e.g (a0)`);
            targetZone = question('zone: ')
        }

        gameBoard.hitZone(targetZone)
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
    console.log('okay have a good day');
}
