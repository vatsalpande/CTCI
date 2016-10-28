( function () {
    /**
     * First BruteForceSolution
     * Complexity Sucks - O(N^2)
     * @param array
     * @returns {Array}
     */
    function productExceptIndex (array) {
        var resultArray = [];
        var product;
        for (var i=0; i<array.length; i++) {
            product =1
            for (var j=0; j<array.length ; j++) {
                if(i !==j) {
                    product *= array[j];
                }
            }
            resultArray.push(product);
        }
        return resultArray;
    }

    var array = [4,5,6,7];
    console.info (productExceptIndex(array));
})();