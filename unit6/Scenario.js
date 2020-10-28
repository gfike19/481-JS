import {DressingRoom} from "./DressingRoom.js";

export default class Scenario {
// export class Scenario {
    
    constructor(numOfRooms=3, numOfCusts, maxNumOfItems=6) {
        this.numOfRooms = numOfRooms;
        this.numOfCusts = numOfCusts;
        this.maxNumOfItems = maxNumOfItems;

        // dr = DressingRoom(this.numOfRooms);
        // custArr = Array();

        // for(i = 0; i < this.numOfCusts; i++) {
        //     c = Customer(maxNumOfItems);
        //     custArr.push(c);
        // }
    }

    run () {
        // document.write("Running scenario. . .<br>");
        // document.write("Number of rooms:", this.numOfRooms, "<br>");
        // document.write("Number of customers:", this.numOfCusts, "<br>");

        // for(i = 0; i < custArr.length; i++) {
        //     document.write("Customer number", i + 1, "has", custArr[i].numOfItems);
        // }
        document.write("lorem ipsum");
    }
}