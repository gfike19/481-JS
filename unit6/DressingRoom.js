export class DressingRoom {

    constructor(numOfRooms = 3) {
        this.numOfRooms = numOfRooms;
    }

    RequestRoom(cust) {
        var min = 60000;
        if (this.numOfRooms != 0) {
            this.numOfRooms--;
            var numOfItems = cust.numOfItems();
            var numOfMins = Util.prototype.getRandomInt(3);
            this.sleep((numOfMins * min) * numOfItems);
            this.numOfRooms++;
        } else {
            this.sleep(min);
        }

    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}