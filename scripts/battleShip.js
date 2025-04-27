export class Board {
    constructor(size) {
        this.size = size
        this.remainingShipZones = 0
    }

    buildBoard() {

        this.zones = []
        this.data = []
        let rowIndex = 0;


        while (this.zones.length < this.size) {
            this.zones.push([])
            this.data.push([])

            while (this.zones[rowIndex].length < this.size) {
                this.zones[rowIndex].push('-')
                this.data[rowIndex].push({
                    type: 'undecided',
                    id: 0,
                    hit: false
                })
            }
            rowIndex++
        }

    }

    buildShips() {

        let rowIndex = 0;
        let columnIndex = 0;
        let run = false;
        let zoneType = null;


        while (this.zones.length > rowIndex) {

            columnIndex = 0

            while (this.zones[rowIndex].length > columnIndex) {

                zoneType = null;
                run = false

                if (this.data[rowIndex][columnIndex].type == 'undecided') {
                    run = true
                    zoneType = Math.random() < .5 ? 'small'
                        : Math.random() > .5 ? 'large'
                            : 'empty'
                } else {
                    run = false
                }

                if (zoneType == 'empty') {
                    run = false
                    this.data[rowIndex][columnIndex].type = 'empty'
                }
                zoneType

                if (zoneType == 'small' && run) {

                    let openPaths = []
                    let rowIndex2 = 0;
                    let columnIndex2 = 0;
                    let checkedPaths = 0;
                    let openZonesInPath = 0;

                    rowIndex - 2 >= 0 ? openPaths.push('north') : rowIndex
                    rowIndex + 2 <= this.size ? openPaths.push('south') : rowIndex
                    columnIndex - 2 >= 0 ? openPaths.push('west') : rowIndex
                    columnIndex + 2 <= this.size ? openPaths.push('east') : rowIndex

                    openPaths

                    while (openPaths.length > 0) {

                        if (openPaths[checkedPaths] == 'east') {
                            while (rowIndex2 < 2) {

                                if (this.data[rowIndex][columnIndex + rowIndex2].type == 'undecided') {
                                    openZonesInPath++
                                }
                                rowIndex2++
                            }

                            rowIndex2 = 0

                            if (openZonesInPath == 2) {

                                while (rowIndex2 < 2) {
                                    this.data[rowIndex][columnIndex + rowIndex2].type = zoneType

                                    this.remainingShipZones++
                                    rowIndex2++
                                }

                                break

                            }

                            rowIndex2 = 0
                            openPaths.splice(checkedPaths, 1)
                        }

                        rowIndex2 = 0

                        if (openPaths[checkedPaths] == 'west') {
                            while (rowIndex2 < 2) {

                                if (this.data[rowIndex][columnIndex - rowIndex2].type == 'undecided') {
                                    openZonesInPath++
                                }
                                rowIndex2++
                            }

                            rowIndex2 = 0

                            if (openZonesInPath == 2) {

                                while (rowIndex2 < 2) {
                                    this.data[rowIndex][columnIndex - rowIndex2].type = zoneType


                                    this.remainingShipZones++
                                    rowIndex2++
                                }

                                break

                            }

                            rowIndex2 = 0

                            openPaths.splice(checkedPaths, 1)

                        }

                        if (openPaths[checkedPaths] == 'north') {
                            while (columnIndex2 < 2) {

                                if (this.data[rowIndex - columnIndex2][columnIndex].type == 'undecided') {
                                    openZonesInPath++
                                }
                                columnIndex2++
                            }

                            columnIndex2 = 0

                            if (openZonesInPath == 2) {

                                while (columnIndex2 < 2) {
                                    this.data[rowIndex - columnIndex2][columnIndex].type = zoneType

                                    this.remainingShipZones++
                                    columnIndex2++
                                }

                                break

                            }

                            columnIndex2 = 0

                            openPaths.splice(checkedPaths, 1)
                        }

                        if (openPaths[checkedPaths] == 'south') {


                            while (columnIndex2 < 2) {



                                if (this.data[rowIndex + columnIndex2][columnIndex].type == 'undecided') {
                                    openZonesInPath++
                                }
                                columnIndex2++

                            }

                            columnIndex2 = 0

                            if (openZonesInPath == 2) {

                                while (columnIndex2 < 2) {

                                    this.data[rowIndex + columnIndex2][columnIndex].type = zoneType

                                    this.remainingShipZones++
                                    columnIndex2++
                                }

                                break

                            }

                            columnIndex2 = 0

                            openPaths.splice(checkedPaths, 1)
                        }
                    }

                } else if (zoneType == 'large' && run) {

                    let openPaths = []
                    let rowIndex2 = 0;
                    let columnIndex2 = 0;
                    let checkedPaths = 0;
                    let openZonesInPath = 0;


                    rowIndex - 3 >= 0 ? openPaths.push('north') : rowIndex
                    rowIndex + 3 <= this.size ? openPaths.push('south') : rowIndex
                    columnIndex - 3 >= 0 ? openPaths.push('west') : rowIndex
                    columnIndex + 3 <= this.size ? openPaths.push('east') : rowIndex

                    while (openPaths.length > 0) {

                        if (openPaths[checkedPaths] == 'east') {
                            while (rowIndex2 < 3) {

                                if (this.data[rowIndex][columnIndex + rowIndex2].type == 'undecided') {
                                    openZonesInPath++
                                }
                                rowIndex2++
                            }

                            rowIndex2 = 0

                            if (openZonesInPath == 3) {

                                while (rowIndex2 < 3) {
                                    this.data[rowIndex][columnIndex + rowIndex2].type = zoneType

                                    this.remainingShipZones++
                                    rowIndex2++
                                }

                                break

                            }

                            rowIndex2 = 0
                            openPaths.splice(checkedPaths, 1)
                        }

                        if (openPaths[checkedPaths] == 'west') {
                            while (rowIndex2 < 3) {

                                if (this.data[rowIndex][columnIndex - rowIndex2].type == 'undecided') {
                                    openZonesInPath++
                                }
                                rowIndex2++
                            }

                            rowIndex2 = 0

                            if (openZonesInPath == 3) {

                                while (rowIndex2 < 3) {
                                    this.data[rowIndex][columnIndex - rowIndex2].type = zoneType

                                    this.remainingShipZones++
                                    rowIndex2++
                                }

                                break

                            }

                            rowIndex2 = 0

                            openPaths.splice(checkedPaths, 1)
                        }

                        if (openPaths[checkedPaths] == 'north') {
                            while (columnIndex2 < 3) {

                                if (this.data[rowIndex - columnIndex2][columnIndex].type == 'undecided') {
                                    openZonesInPath++
                                }
                                columnIndex2++
                            }

                            columnIndex2 = 0

                            if (openZonesInPath == 3) {

                                while (columnIndex2 < 3) {
                                    this.data[rowIndex - columnIndex2][columnIndex].type = zoneType

                                    this.remainingShipZones++
                                    columnIndex2++
                                }

                                break

                            }

                            columnIndex2 = 0

                            openPaths.splice(checkedPaths, 1)
                        }

                        if (openPaths[checkedPaths] == 'south') {

                            while (columnIndex2 < 3) {

                                if (this.data[rowIndex + columnIndex2][columnIndex].type == 'undecided') {
                                    openZonesInPath++
                                }
                                columnIndex2++

                            }

                            columnIndex2 = 0

                            if (openZonesInPath == 3) {

                                while (columnIndex2 < 3) {

                                    this.data[rowIndex + columnIndex2][columnIndex].type = zoneType

                                    this.remainingShipZones++
                                    columnIndex2++

                                }

                                break

                            }

                            columnIndex2 = 0

                            openPaths.splice(checkedPaths, 1)
                        }

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

        while (this.zones.length > rowIndex) {

            while (this.zones[rowIndex].length > columnIndex) {
                this.data[rowIndex][columnIndex].hit = true


                columnIndex++
            }
            columnIndex = 0

            rowIndex++
        }

        rowIndex = 0

        while (this.zones.length > rowIndex) {

            while (this.zones[rowIndex].length > columnIndex) {

                this.zones[rowIndex][columnIndex] = this.data[rowIndex][columnIndex].type == 'small' ? 's' : this.data[rowIndex][columnIndex].type == 'large' ? 'l' : 'e'

                columnIndex++
            }
            columnIndex = 0

            rowIndex++
        }

    }

    hitZone(row, column) {

            this.data[row][column].hit = true
            this.remainingShipZones = this.data[row][column].type == 'small' || this.data[row][column].type == 'large' ? --this.remainingShipZones : this.remainingShipZones
            this.zones[row][column] = this.data[row][column].type == 'small' ? 's' : this.data[row][column].type == 'large' ? 'l' : 'e'
    }

    validator (row, column) {

        let validated = false
                
        validated = row < this.size && row >= 0 && column < this.size && column >= 0 ? true : false 

        return validated

    }
}

const gameBoard = new Board (4)

gameBoard.buildBoard()
gameBoard.buildShips()
gameBoard.debugBoard()

// console.log(gameBoard.zones);



