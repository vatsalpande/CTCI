( function () {

    /**
     * @Complexity - O(N)+O(N) +O(N) = O(N)
     * @param array
     * @returns {number}
     */
    function largestProductOfThree (array) {
        var highest = array[0], secondHighest, smallest = array[0], secondSmallest;
        var productOfHighest,  productOfSmallest;
        var localProduct;
        for (var i = 0; i<array.length; i++) {
            highest = Math.max(highest, array[i]);
            smallest = Math.min(smallest, array[i]);
        }
        for (var i = 0; i<array.length; i++) {
            if (array[i] !== highest) {
                if (!secondHighest) {
                    secondHighest = array[i];
                }
                secondHighest = Math.max(secondHighest, array[i]);
            }

            if (array[i] !== smallest) {
                if (!secondSmallest) {
                    secondSmallest = array[i];
                }
                secondSmallest = Math.min (secondSmallest, array[i]);
            }
        }

        for (var i = 0; i<array.length; i++) {
            if (array[i] !== highest && array[i] !== secondHighest) {
                localProduct = highest*secondHighest*array[i];
                if (!productOfHighest) {
                    productOfHighest = localProduct;
                }
                productOfHighest = Math.max (localProduct, productOfHighest);
            }
            if (array[i] !== smallest && array[i] !== secondSmallest) {
                localProduct = smallest*secondSmallest*array[i];
                if (!productOfSmallest) {
                    productOfSmallest = localProduct;
                }
                productOfSmallest = Math.max (localProduct, productOfSmallest);
            }
        }
        return Math.max (productOfHighest, productOfSmallest);
    }

    var array  = [11, 6,7,8,9,-10];
    console.log(largestProductOfThree(array));


})();