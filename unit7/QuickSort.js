function quickSort(arr) {

    var left = [];
    var right = [];

    // pivot key = 0
    var pivot = arr.shift();

    for(i = 0; i < arr.length; i++) {
        var val = arr[i];
        if(val > pivot) {
            right.push(val);
        } else {
            left.push(val);
        }
    }

    var newArr = [];
    newArr = newArr.concat(left, [pivot], right);

    return newArr;
}