( function () {

    /**
     * RunTIme - O(N+N)  = O(2N)
     * @param array
     * @returns {number}
     */
    function largestProfit(array) {
        var smallest, smallestIndex;
        for (var i =0; i<array.length; i++) {
            if(!smallest) {
                smallest = array[i];
                smallestIndex = i;
            }else {
                if(smallest > array[i]) {
                    smallest = array[i];
                    smallestIndex = i;
                }
            }
        }
        console.info (smallestIndex);
        console.info (smallest);
        var largestValue, largestIndex;
        for (i= smallestIndex +1; i<array.length; i++) {
            if (!largestValue) {
                largestValue = array[i];
                largestIndex = i;
            }else {
                if (largestValue < array[i]) {
                    largestValue = array[i];
                    largestIndex = i;
                }
            }
        }
        console.info (largestIndex);
        console.info (largestValue);
        var maxProfit = largestValue - smallest;
        return maxProfit;
    }
    var array = [40,30,2,18,7,5,3,10];
    console.info (largestProfit(array));
})();

