export class Board {
    constructor(size) {
        this.size = size
        this.remainingShipZones = 0
    }

    buildBoard() {

        this.letters = ['A', 'B', 'C', 'D', 'E', 'F']
        this.zones = {}
        this.data = {}
        let rowIndex = 0;

        while (rowIndex < this.size) {
            this.zones[this.letters[rowIndex]] = []
            this.data[this.letters[rowIndex]] = []

            while (this.zones[this.letters[rowIndex]].length < this.size) {

                this.zones[this.letters[rowIndex]].push('-')
                this.data[this.letters[rowIndex]].push({
                    type: 'undecided',
                    id: 0,
                    hit: false
                })

            }
            rowIndex++
        }
    }

    buildShips() {


        let openZonesInPath = 0;
        let rowIndex = 0;
        let columnIndex = 0;
        let openPaths = []
        let difference = 0
        let run = false;
        let zoneType = null;

        // check surroundiing zones for enough space
        // check surrounding zones for already existing types 
        // if zones are clean. place ship
        // else don't place ship




        while (this.size > rowIndex) {

            columnIndex = 0

            while (this.size > columnIndex) {

                zoneType = null;
                run = false

                if (this.data[this.letters[rowIndex]][columnIndex].type == 'undecided') {
                    run = true
                    zoneType = Math.random() < .5 ? 'small'
                        : Math.random() > .5 ? 'large'
                            : 'empty'
                } else {
                    run = false
                }

                if (zoneType == 'empty') {
                    run = false
                    this.data[this.letters[rowIndex]][columnIndex].type = 'empty'
                }
                zoneType

                if (zoneType == 'small' && run) {

                    let shipSize = 2
                    openPaths = []

                    rowIndex - shipSize >= 0 ? openPaths.push('north') : rowIndex
                    rowIndex + shipSize < this.size ? openPaths.push('south') : rowIndex
                    columnIndex - shipSize >= 0 ? openPaths.push('west') : rowIndex
                    columnIndex + shipSize < this.size ? openPaths.push('east') : rowIndex

                    while (openPaths.length > 0) {

                        while (difference < shipSize) {

                            switch (openPaths[0]) {

                                case 'south': this.data[this.letters[rowIndex + difference]][columnIndex].type == 'undecided' ? openZonesInPath++ : openZonesInPath; break;
                                case 'east': this.data[this.letters[rowIndex]][columnIndex + difference].type == 'undecided' ? openZonesInPath++ : openZonesInPath; break;
                                case 'north': this.data[this.letters[rowIndex - difference]][columnIndex].type == 'undecided' ? openZonesInPath++ : openZonesInPath; break;
                                case 'west': this.data[this.letters[rowIndex]][columnIndex - difference].type == 'undecided' ? openZonesInPath++ : openZonesInPath; break;

                                default:
                                    break;
                            }

                            difference++
                        }

                        difference = 0

                        if (openZonesInPath == shipSize) {

                            while (difference < shipSize) {

                                switch (openPaths[0]) {

                                    case 'south': this.data[this.letters[rowIndex + difference]][columnIndex].type = zoneType; break;
                                    case 'east': this.data[this.letters[rowIndex]][columnIndex + difference].type = zoneType; break;
                                    case 'north': this.data[this.letters[rowIndex - difference]][columnIndex].type = zoneType; break;
                                    case 'west': this.data[this.letters[rowIndex]][columnIndex - difference].type = zoneType; break;

                                    default:
                                        break;
                                }

                                this.remainingShipZones++
                                difference++
                            }

                            difference = 0
                            openZonesInPath = 0
                            break

                        }

                        openZonesInPath = 0
                        difference = 0
                        openPaths.splice(0, 1)
                    }

                } else if (zoneType == 'large' && run) {

                    let shipSize = 3
                    openPaths = []

                    rowIndex - shipSize >= 0 ? openPaths.push('north') : rowIndex
                    rowIndex + shipSize < this.size ? openPaths.push('south') : rowIndex
                    columnIndex - shipSize >= 0 ? openPaths.push('west') : rowIndex
                    columnIndex + shipSize < this.size ? openPaths.push('east') : rowIndex

                    while (openPaths.length > 0) {

                        while (difference < shipSize) {

                            switch (openPaths[0]) {
                                
                                case 'south': this.data[this.letters[rowIndex + difference]][columnIndex].type == 'undecided' ? openZonesInPath++ : openZonesInPath; break;
                                case 'east': this.data[this.letters[rowIndex]][columnIndex + difference].type == 'undecided' ? openZonesInPath++ : openZonesInPath; break;
                                case 'north': this.data[this.letters[rowIndex - difference]][columnIndex].type == 'undecided' ? openZonesInPath++ : openZonesInPath; break;
                                case 'west': this.data[this.letters[rowIndex]][columnIndex - difference].type == 'undecided' ? openZonesInPath++ : openZonesInPath; break;

                                default:
                                    break;
                            }

                            difference++
                        }

                        difference = 0

                        if (openZonesInPath == shipSize) {

                            while (difference < shipSize) {

                                switch (openPaths[0]) {

                                    case 'south': this.data[this.letters[rowIndex + difference]][columnIndex].type = zoneType; break;
                                    case 'east': this.data[this.letters[rowIndex]][columnIndex + difference].type = zoneType; break;
                                    case 'north': this.data[this.letters[rowIndex - difference]][columnIndex].type = zoneType; break;
                                    case 'west': this.data[this.letters[rowIndex]][columnIndex - difference].type = zoneType; break;

                                    default:
                                        break;
                                }

                                this.remainingShipZones++
                                difference++
                            }

                            difference = 0
                            openZonesInPath = 0
                            break

                        }

                        openZonesInPath = 0
                        difference = 0
                        openPaths.splice(0, 1)
                    }
                }

                columnIndex++
            }

            rowIndex++
        }

    }

    debugBoard() {

        let rowIndex = 0
        let columnIndex = 0

        while (this.size > rowIndex) {

            while (this.size > columnIndex) {
                this.data[this.letters[rowIndex]][columnIndex].hit = true


                columnIndex++
            }
            columnIndex = 0

            rowIndex++
        }

        rowIndex = 0

        while (this.size > rowIndex) {

            while (this.size > columnIndex) {

                this.zones[this.letters[rowIndex]][columnIndex] = this.data[this.letters[rowIndex]][columnIndex].type == 'small' ? 's' : this.data[this.letters[rowIndex]][columnIndex].type == 'large' ? 'l' : 'e'

                columnIndex++
            }
            columnIndex = 0

            rowIndex++
        }

    }

    hitZone(zone) {

        let rowToTarget = zone[0].toUpperCase()
        let columnToTarget = zone[1] * 1

        this.data[rowToTarget][columnToTarget].hit = true
        this.remainingShipZones = this.data[rowToTarget][columnToTarget].type == 'small' || this.data[rowToTarget][columnToTarget].type == 'large' ? --this.remainingShipZones : this.remainingShipZones
        this.zones[rowToTarget][columnToTarget] = this.data[rowToTarget][columnToTarget].type == 'small' ? 's' : this.data[rowToTarget][columnToTarget].type == 'large' ? 'l' : 'e'
    }

    validator(zone) {

        let rowToTarget = zone[0].toUpperCase()
        let columnToTarget = zone[1] * 1

        let validated = false

        validated = this.letters.indexOf(rowToTarget) < this.size && this.letters.indexOf(rowToTarget) >= 0 && columnToTarget < this.size && columnToTarget >= 0 ? true : false

        return validated

    }
}

const gameBoard = new Board(4)

gameBoard.buildBoard()
gameBoard.buildShips()
gameBoard.debugBoard()

// console.log(gameBoard.zones);
// console.log(gameBoard.data);
// console.table(gameBoard.zones)





