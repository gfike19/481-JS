class Customer {

    constructor(numOfItems = 0) {

        if(numOfItems == 0) {
            this.numOfItems = getRandomInt(20);
        }
        this.numOfItems = numOfItems;
    }
}

class DressingRoom {

    constructor(numOfRooms = 3) {
        this.numOfRooms = numOfRooms;
    }

    RequestRoom(cust) {
        if(this.numOfRooms != 0) {
            var numOfMins = getRandomInt(3);
            var totalTime = cust.numOfItems * numOfMins;
            var w = new Worker(sleep(totalTime));
            this.numOfRooms--;
            w.
            this.numOfRooms++;
        }  else {
            document.writeln("All rooms are in use");
        }
    }


}

class Scenario {

    constructor(numOfCusts, numOfRooms = 3,  maxNumOfItems = 6) {
        this.numOfRooms = numOfRooms;
        this.numOfCusts = numOfCusts;
        this.maxNumOfItems = maxNumOfItems;

    }

    run() {
        document.write("lorem inpsum");
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function main() {
    var c = new Customer(1);
    var dr = new DressingRoom();
    dr.RequestRoom(c);
}
