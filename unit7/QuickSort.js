function quickSort(arr) {
    if(arr.lenght < 2) {
        return arr;
    }
    var left = [];
    var right = [];

    // pivot key = 0
    var pivot = arr.shift();

    for(var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if(val > pivot) {
            right.push(val);
        } else {
            left.push(val);
        }
    }
    
    return Array.prototype.concat(quickSort(left), [pivot], quickSort(right));
}