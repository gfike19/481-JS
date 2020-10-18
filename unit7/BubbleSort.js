function bubbleSort(arr) {
    var len = arr.length;
    var isSorted = false;

    while(!isSorted) {
        var nSwaps = 0;
        for(var i = 0; i < len + 1; i++) {
            if(arr[i] > arr[i + 1]) {
                var temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = [temp];
                nSwaps++;
            }

            if(nSwaps == 0) {
                isSorted = true;
            } else {
                isSorted = false;
            }
        }
    }
    return arr;
}