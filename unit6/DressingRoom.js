class DressingRoom {

    constructor(numOfRooms=3) {
        this.numOfRooms = numOfRooms; 
    }

     RequestRoom () {
        if(this.numOfRooms != 0) {
            this.numOfRooms --;
        }
    }
}