// export default class Customer {
class Customer {
    constructor(numOfItems = null) {
        if (numOfItems == null) {
            this.numOfItems = Util.prototype.getRandomInt(20);
        } else {
            this.numOfItems = numOfItems;
        }
    }

    get numOfItems() {
        return this.numOfItems;
    }
}