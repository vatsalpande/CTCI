(function () {
    /**
     * Recognize the pattern of the numbers is of utmost importance.
     * One pattern learned - Check for numbers before index and numbers after index.
     * @Complexity  O(3n) -> O(N)
     * @param array
     * @returns {Array}
     */

    function multiplicationBeforeIndex(array) {
        var result = [];
        var product;
        for (var i = 0; i < array.length; i++) {
            if (i == 0) {
                product = 1;
            } else {
                product *= array[i - 1];
            }
            result.push(product);
        }
        return result;
    }

    function multiplicationAfterIndex(array) {
        var result = [];
        var product;
        for (var i = array.length - 1; i >= 0; i--) {
            if (i == array.length - 1) {
                product = 1;
            } else {
                product *= array[i + 1];
            }
            result[i] = product;
        }
        return result;
    }

    function multiplicationIndex(array) {
        var productBeforeIndex = multiplicationBeforeIndex(array);
        var productAfterIndex = multiplicationAfterIndex(array);
        var finalProduct = [];
        for (var i = 0; i < array.length; i++) {
            finalProduct.push(productBeforeIndex[i] * productAfterIndex[i]);
        }
        return finalProduct;
    }

    var array = [4,5,6,7,8,9,10,11,12,14,4,5,6,7,8,9,10,11,12,14,4,5,6,7,8,9,10,11,12,14,4,5,6,7,8,9,10,11,12,14,4,5,6,7,8,9,10,11,12,14,4,5,6,7,8,9,10,11,12,14,4,5,6,7,8,9,10,11,12,14,4,5,6,7,8,9,10,11,12,14,4,5,6,7,8,9,10,11,12,14,4,5,6,7,8,9,10,11,12,14,4,5,6,7,8,9,10,11,12,14,4,5,6,7,8,9,10,11,12,14];
    console.time('Executing Script');
    console.info (multiplicationIndex(array));
    console.timeEnd('Executing Script');

})();
